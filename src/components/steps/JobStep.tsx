import { Margin } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import ResourceList from "components/resources/ResourceList";
import { LifeStep } from "interfaces";
import Image from "next/image";
import { useMemo, useState } from "react";
import style from "./JobStep.module.scss";
import { StepProject } from "./StepProject";

export function JobStep({ step }: { step: LifeStep }) {
  const [{ endDate, startDate }] = useState<{ endDate: Date; startDate: Date }>(
    {
      startDate: new Date(step.initialTime),
      endDate: new Date(step.endTime),
    }
  );

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
  };

  const stepStylePrefix = useMemo(
    () => step.name.toLowerCase().replaceAll(" ", "_"),
    [step.name]
  );

  return (
    <Card
      className={style[`card-background--${stepStylePrefix}`]}
      elevation={0}
    >
      <CardHeader
        title={step.name}
        subheader={`${startDate.toLocaleString("en-GB", dateOptions)} - ${
          step.endTime
            ? endDate.toLocaleString("en-GB", dateOptions)
            : "Still here!"
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
            <Avatar className={style[`avatar--${stepStylePrefix}`]}>
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
            <Grid item xs={12} sm={6} key={index}>
              <StepProject project={s} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
