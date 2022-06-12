import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Project } from "interfaces";
import { useResources } from "lib/api";
import Link from "next/link";

function projectDescription(project: Project) {
  const { resources, isError, isLoading } = useResources(project.resources);
  return (
    <Accordion elevation={0}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
          {project.description}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          {project.resources &&
            resources &&
            resources.map((resource) => (
              <Grid item>
                <Typography variant="caption">
                  <Link href={resource.url}>{resource.name}</Link>
                </Typography>
              </Grid>
            ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export function StepProject({ project }: { project: Project }) {
  return (
    <ListItem>
      <ListItemText
        primary={
          <Typography sx={{ whiteSpace: "pre-wrap" }} variant="subtitle1">
            {project.name}
          </Typography>
        }
        secondary={projectDescription(project)}
      />
    </ListItem>
  );
}
