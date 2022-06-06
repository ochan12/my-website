import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  LinearProgress,
  Card,
  CardHeader,
  CardContent,
  List,
} from "@mui/material";
import { Skill, Resource } from "interfaces";

type ResourceMap = { [k: string]: Resource };

function SkillItem(skill: Skill, resourcesMap: ResourceMap) {
  console.log({ skill, resourcesMap });
  return (
    <ListItem key={skill.name}>
      <ListItemAvatar>
        <Avatar
          imgProps={{
            style: {
              objectFit: "contain",
            },
          }}
          alt={skill.name}
          src={resourcesMap[skill.name]?.logo}
        />
      </ListItemAvatar>
      <ListItemText>
        <LinearProgress
          color="primary"
          value={skill.experience}
          variant="determinate"
        />
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
    <Card>
      <CardHeader title={title} />
      <CardContent>
        <List>{skills?.map((skill) => SkillItem(skill, resourcesMap))}</List>
      </CardContent>
    </Card>
  );
}
