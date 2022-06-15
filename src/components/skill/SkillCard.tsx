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
} from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import {
  DARK_PRIMARY_COLOR,
  LIGHT_PRIMARY_COLOR,
} from "components/theme/ThemeWrapper";
import { Skill, Resource } from "interfaces";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "transparent",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
      theme.palette.mode === "dark" ? DARK_PRIMARY_COLOR : LIGHT_PRIMARY_COLOR,
  },
}));

type ResourceMap = { [k: string]: Resource };

function SkillItem(skill: Skill, resourcesMap: ResourceMap) {
  return (
    <ListItem key={skill.name}>
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
        />
      </ListItemAvatar>
      <ListItemText>
        <BorderLinearProgress
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
    <Card elevation={0} className="border-stone-200 border-solid border-2">
      <CardHeader title={title} />
      <CardContent>
        <List>{skills?.map((skill) => SkillItem(skill, resourcesMap))}</List>
      </CardContent>
    </Card>
  );
}
