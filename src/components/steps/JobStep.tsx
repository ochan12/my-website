import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import ResourceList from "components/resources/ResourceList";
import { LifeStep } from "interfaces";
import Image from "next/image";
import { useState } from "react";
import style from "./JobStep.module.scss";

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
  return (
    <Card>
      <CardHeader
        title={step.name}
        subheader={`${startDate.toLocaleString("en-GB", dateOptions)} - ${
          step.endTime ? endDate.toLocaleString("en-GB", dateOptions) : "Still here!"
        }`}
        avatar={
          step.photos?.[0] ? (
            <Image src={step.photos?.[0]} />
          ) : (
            <Avatar
              className={
                style[`avatar--${step.name.toLowerCase().replaceAll(" ", "_")}`]
              }
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
      </CardContent>
    </Card>
  );
}
