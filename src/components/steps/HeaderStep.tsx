import React from "react";
import { Avatar, Grid } from "@mui/material";
import { LifeStep } from "interfaces";
import Image from "next/image";

export function HeaderStep({
  step,
  isActiveIndex,
  onClick,
}: {
  step: LifeStep;
  currentStepIndex: number;
  isActiveIndex: boolean;
  onClick: () => void;
}) {
  const stepStylePrefix = step.name
    .toLowerCase()
    .replaceAll(" ", "_")
    .replaceAll("ó", "o");
  return (
    <Grid
      container
      textAlign={"center"}
      className={`${
        stepStylePrefix === "cruncho"
          ? "bg-cruncho/20 cursor-pointer rounded-lg border border-transparent hover:border-cruncho/50"
          : stepStylePrefix === "reputacion_digital"
            ? "bg-reputacion-digital/20 cursor-pointer rounded-lg border border-transparent hover:border-reputacion-digital/50"
            : stepStylePrefix === "qbit"
              ? "bg-qbit/20 cursor-pointer rounded-lg border border-transparent hover:border-qbit/50"
              : stepStylePrefix === "solo_projects"
                ? "bg-solo-projects/20 cursor-pointer rounded-lg border border-transparent hover:border-solo-projects/50"
                : stepStylePrefix === "tracab"
                  ? "bg-tracab/20 cursor-pointer rounded-lg border border-transparent hover:border-tracab/50"
                  : stepStylePrefix === "insurely"
                    ? "bg-insurely/20 cursor-pointer rounded-lg border border-transparent hover:border-insurely/50"
                    : "cursor-pointer rounded-lg border border-transparent"
      } p-2`}
      onClick={onClick}
      alignItems="center"
    >
      <Grid
        size={{ xs: 12 }}
        justifyContent="center"
        textAlign={"center"}
        display="flex"
        alignItems="center"
      >
        {step.photos?.[0] ? (
          <Image
            src={step.photos?.[0]}
            width={100}
            height={50}
            style={{
              maxHeight: 50,
              minHeight: 50,
              objectFit: "contain",
              margin: "0 auto",
              display: "block",
            }}
            alt={step.name}
          />
        ) : (
          <Avatar
            sx={{
              margin: "auto",
            }}
            className={`${
              stepStylePrefix === "cruncho"
                ? "bg-cruncho"
                : stepStylePrefix === "reputacion_digital"
                  ? "bg-reputacion-digital"
                  : stepStylePrefix === "qbit"
                    ? "bg-qbit"
                    : stepStylePrefix === "solo_projects"
                      ? "bg-solo-projects"
                      : stepStylePrefix === "tracab"
                        ? "bg-tracab"
                        : stepStylePrefix === "insurely"
                          ? "bg-insurely"
                          : ""
            }`}
          >
            {step.name
              .split(" ")
              .map((splitted) => splitted[0].toUpperCase())
              .slice(0, 2)}
          </Avatar>
        )}
      </Grid>
      {/* <Grid size={{ xs: 12}}>
        <Typography variant="caption">{step.name}</Typography>
      </Grid> */}
    </Grid>
  );
}
