import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import { Project } from "interfaces";
import { useResources } from "lib/api";
import Link from "next/link";

function ProjectDescription(project: Project) {
  const { resources, isError, isLoading } = useResources(project.resources);
  return (
    <div className="mt-2">
      <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
        {project.description}
      </Typography>
      {project.resources && resources && (
        <Grid container spacing={1} className="mt-2">
          {resources.map((resource, index) => (
            <Grid
              key={index}
              size={{ xs: 6, sm: 4, md: 2.4 }}
              className="text-center"
            >
              <Typography variant="caption">
                <Link
                  href={resource.url}
                  className="text-blue-400 hover:text-blue-300"
                >
                  {resource.name}
                </Link>
              </Typography>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export function StepProject({ project }: { project: Project }) {
  return (
    <Grid container className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
      <Grid size={{ xs: 12 }}>
        <Typography sx={{ whiteSpace: "pre-wrap" }} variant="subtitle1">
          {project.name}
          {project.url && (
            <a href={project.url}>
              <IconButton className="py-0">
                <LinkIcon />
              </IconButton>
            </a>
          )}
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>{ProjectDescription(project)}</Grid>
    </Grid>
  );
}
