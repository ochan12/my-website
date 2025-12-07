import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Card,
  CardHeader,
  CardContent,
  List,
  styled,
  useTheme,
} from "@mui/material";
import {
  DARK_PRIMARY_COLOR,
  LIGHT_PRIMARY_COLOR,
} from "components/theme/ThemeWrapper";
import { Skill, Resource } from "interfaces";

const BorderLinearProgress = styled("div", {
  shouldForwardProp: (prop) => prop !== "value",
})<{ value: number }>(({ theme, value }) => ({
  height: 8,
  borderRadius: 5,
  backgroundColor: "transparent",
  position: "relative",
  overflow: "visible",
  "--progress-width": `${value}%`,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    borderRadius: 5,
    backgroundColor:
      theme.palette.mode === "dark" ? DARK_PRIMARY_COLOR : LIGHT_PRIMARY_COLOR,
    animation: `lightsaberGrow 1.5s ease-out forwards, lightsaberGlow 2s ease-in-out infinite alternate`,
    animationDelay: "0.3s",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 0 10px rgba(235, 33, 46, 0.8), 0 0 20px rgba(235, 33, 46, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.3)"
        : "0 0 10px rgba(46, 103, 248, 0.8), 0 0 20px rgba(46, 103, 248, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.3)",
    width: "0%",
    "&::after": {
      content: '""',
      position: "absolute",
      top: "-2px",
      left: "-2px",
      right: "-2px",
      bottom: "-2px",
      borderRadius: "6px",
      background:
        theme.palette.mode === "dark"
          ? "linear-gradient(90deg, transparent, rgba(235, 33, 46, 0.6), transparent)"
          : "linear-gradient(90deg, transparent, rgba(46, 103, 248, 0.6), transparent)",
      animation: "lightsaberSweep 3s linear infinite",
      zIndex: -1,
    },
  },
  "@keyframes lightsaberGrow": {
    "0%": {
      width: "0%",
    },
    "100%": {
      width: "var(--progress-width)",
    },
  },
  "@keyframes lightsaberGlow": {
    "0%": {
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 0 10px rgba(235, 33, 46, 0.8), 0 0 20px rgba(235, 33, 46, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.3)"
          : "0 0 10px rgba(46, 103, 248, 0.8), 0 0 20px rgba(46, 103, 248, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.3)",
    },
    "100%": {
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 0 15px rgba(235, 33, 46, 1), 0 0 30px rgba(235, 33, 46, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.5)"
          : "0 0 15px rgba(46, 103, 248, 1), 0 0 30px rgba(46, 103, 248, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.5)",
    },
  },
  "@keyframes lightsaberSweep": {
    "0%": {
      opacity: 0,
      transform: "translateX(-100%)",
    },
    "50%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
      transform: "translateX(100%)",
    },
  },
}));

type ResourceMap = { [k: string]: Resource };

export function SkillItem({
  skill,
  resourcesMap,
}: {
  skill: Skill;
  resourcesMap: ResourceMap;
}) {
  const theme = useTheme();
  return (
    <ListItem key={skill.name} role="skill-list-item">
      <ListItemAvatar>
        <Avatar
          variant="rounded"
          imgProps={{
            style: {
              objectFit: "contain",
            },
            alt: resourcesMap[skill.name]?.name,
            title: resourcesMap[skill.name]?.name,
          }}
          title={resourcesMap[skill.name]?.name}
          alt={skill.name}
          src={resourcesMap[skill.name]?.logo}
          role="skill-list-item-avatar"
        />
      </ListItemAvatar>
      <ListItemText>
        <BorderLinearProgress value={skill.experience} />
      </ListItemText>
    </ListItem>
  );
}

export default function SkillCard({
  skills,
  resourcesMap,
  title,
}: {
  skills: Skill[];
  resourcesMap: ResourceMap;
  title: string;
}) {
  return (
    <Card elevation={0} className="border-neutral-600 border-solid border-2">
      <CardHeader title={title} />
      <CardContent>
        <List>
          {skills?.map((skill) => (
            <SkillItem
              key={skill.name}
              skill={skill}
              resourcesMap={resourcesMap}
            />
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
