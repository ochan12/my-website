import { GeoJSON as GeoJSONType, StepType } from "interfaces";
import { useStepsByType } from "lib/api";
import { useMemo } from "react";
import { GeoJSON, MapContainer, TileLayer } from "react-leaflet";
import countriesData from "../../assets/countries.json";

export default function Map() {
  const { steps, isLoading } = useStepsByType(StepType.TRAVEL);
  const countries = useMemo(() => {
    return Array.from(new Set(steps?.map((step) => step.place.countryCode)));
  }, [steps]);

  const geoDataFromCountries = useMemo(() => {
    return (countriesData as GeoJSONType).features
      .filter((feature) => countries.includes(feature.properties.ISO_A3))
      .map((country) => country.geometry);
  }, [countries]);

  if (typeof window === "undefined") return null;
  return (
    <MapContainer
      style={{ height: "100%" }}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        // attribution=
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={geoDataFromCountries as any} />
    </MapContainer>
  );
}
