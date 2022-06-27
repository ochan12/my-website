import React from "react";
import { Avatar, Grid } from "@mui/material";
import { LifeStep } from "interfaces";
import style from "./JobStep.module.scss";

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
  return (
    <Grid
      container
      textAlign={"center"}
      className={`${
        style[`headerStepper--${step.name.toLowerCase().replaceAll(" ", "_")}`]
      } p-2`}
      onClick={onClick}
      alignItems="center"
    >
      <Grid item xs={12} justifyContent="center" textAlign={"center"}>
        {step.photos?.[0] ? (
          <img
            src={step.photos?.[0]}
            style={{
              maxHeight: 50,
              minHeight: 50,
              objectFit: "contain",
              margin: "auto",
            }}
            alt={step.name}
          />
        ) : (
          <Avatar
            sx={{
              margin: "auto",
            }}
            className={
              style[`avatar--${step.name.toLowerCase().replaceAll(" ", "_")}`]
            }
          >
            {step.name
              .split(" ")
              .map((splitted) => splitted[0].toUpperCase())
              .slice(0, 2)}
          </Avatar>
        )}
      </Grid>
      {/* <Grid item xs={12}>
        <Typography variant="caption">{step.name}</Typography>
      </Grid> */}
    </Grid>
  );
}
