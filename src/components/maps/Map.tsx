import React from "react";
import { useTheme } from "@mui/material";
import {
  DARK_PRIMARY_COLOR,
  LIGHT_PRIMARY_COLOR,
} from "components/theme/ThemeWrapper";
import { GeoJSON as GeoJSONType, StepType } from "interfaces";
import { Icon, PathOptions } from "leaflet";
import { useStepsByType } from "lib/api";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { GeoJSON, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import countriesData from "../../assets/countries.json";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const { steps, isLoading } = useStepsByType(StepType.TRAVEL);
  const [finishLoading, setFinishLoading] = useState(false);
  const countries = useMemo(
    () =>
      isLoading
        ? []
        : Array.from(new Set(steps?.map((step) => step.place.countryCode))),
    [steps, isLoading],
  );

  const geoDataFromCountries = useMemo(
    () =>
      (countriesData as GeoJSONType).features.filter((feature) =>
        countries.includes(feature.properties.ISO_A3),
      ),
    [countries],
  );
  const rightNow = useMemo(
    () => steps?.find((step) => step.place.countryCode === "SWE"),
    [steps],
  );
  const colorMode = useTheme().palette.mode;

  const pathOptions: PathOptions = useMemo(
    () =>
      colorMode === "dark"
        ? { color: DARK_PRIMARY_COLOR, stroke: false }
        : { color: LIGHT_PRIMARY_COLOR, stroke: false },
    [colorMode],
  );

  useEffect(() => {
    if (
      !!rightNow?.name &&
      geoDataFromCountries.length > 0 &&
      countries?.length > 0
    ) {
      setFinishLoading(true);
    }
  }, [rightNow?.name, countries?.length, geoDataFromCountries.length]);

  if (!finishLoading)
    return (
      <Image
        src={"/img/travel/loading.gif"}
        height={500}
        width={600}
        alt="Travelling"
        layout="intrinsic"
      />
    );
  return (
    <MapContainer
      style={{ height: "100%" }}
      center={
        rightNow
          ? [rightNow?.place.position.lat!, rightNow?.place.position.lon!]
          : [0, 0]
      }
      zoom={3}
    >
      <TileLayer
        // attribution=
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={geoDataFromCountries as any} pathOptions={pathOptions} />
      {!!rightNow && (
        <Marker
          icon={
            new Icon({
              iconUrl: `/img/icons/home_${colorMode}.svg`,
              iconSize: [30, 30],
            })
          }
          position={{
            ...rightNow.place.position,
            lng: rightNow.place.position.lon,
          }}
        >
          <Popup>Right now, this is my home!</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
