import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import ResourceList from "components/resources/ResourceList";
import { LifeStep } from "interfaces";
import { useMemo, useState } from "react";

import { StepProject } from "./StepProject";

export function JobStep({ step }: { step: LifeStep }) {
  const [{ endDate, startDate }] = useState<{ endDate: Date; startDate: Date }>(
    {
      startDate: new Date(step.initialTime),
      endDate: new Date(step.endTime),
    },
  );

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
  };

  const stepStylePrefix = useMemo(
    () => step.name.toLowerCase().replaceAll(" ", "_").replaceAll("ó", "o"),
    [step.name],
  );

  return (
    <Card
      sx={{
        backgroundColor:
          stepStylePrefix === "cruncho"
            ? "rgba(236, 75, 68, 0.2)"
            : stepStylePrefix === "reputacion_digital"
              ? "rgba(16, 89, 118, 0.2)"
              : stepStylePrefix === "qbit"
                ? "rgba(15, 128, 185, 0.2)"
                : stepStylePrefix === "solo_projects"
                  ? "rgba(255, 232, 31, 0.2)"
                  : stepStylePrefix === "tracab"
                    ? "rgba(92, 172, 113, 0.2)"
                    : "rgba(255, 255, 255, 0.1)",
      }}
      elevation={0}
    >
      <CardHeader
        title={step.name}
        subheader={`${startDate.toLocaleString("en-GB", dateOptions)} - ${
          step.endTime
            ? endDate.toLocaleString("en-GB", dateOptions)
            : "Present"
        }`}
        avatar={
          step.photos?.[0] ? (
            <img
              src={step.photos?.[0]}
              alt={step.name}
              style={{
                maxHeight: 30,
                minHeight: 30,
                objectFit: "contain",
                margin: "auto",
              }}
            />
          ) : (
            <Avatar
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
                          : ""
              }`}
            >
              {step.name
                .split(" ")
                .map((splitted) => splitted[0].toUpperCase())
                .slice(0, 2)}
            </Avatar>
          )
        }
      />
      <CardContent>
        <Typography variant="body2">{step.description}</Typography>
        <ResourceList
          resourcesList={step.projects.flatMap((p) => p.resources)}
        />
        <Grid container spacing={4}>
          {step.projects.map((s, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
              <StepProject project={s} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
