import React from "react";
import { Grid } from "@mui/material";
import Layout from "components/layout/Layout";
import SkillCard from "components/skill/SkillCard";
import { Resource } from "interfaces";
import { useResources } from "lib/api";
import { useBackendSkills, useDbSkills, useFrontendSkills, useOtherSkills, useServicesSkills } from "lib/hooks";
import { useEffect, useState } from "react";
import mixpanel from "mixpanel-browser";

export default function Skills() {
  useEffect(() => {
    mixpanel.track("Skills");
  }, []);
  const backendSkills = useBackendSkills();
  const frontendSkills = useFrontendSkills();
  const dbSkills = useDbSkills();
  const otherSkills = useOtherSkills();
  const serviceSkills = useServicesSkills();
  const [resourcesMap, setResourceMap] = useState<{ [k: string]: Resource }>(
    {}
  );
  const { resources, isLoading, isError } = useResources([
    ...backendSkills.map((s) => s.name),
    ...frontendSkills.map((s) => s.name),
    ...dbSkills.map((s) => s.name),
    ...otherSkills.map((s) => s.name),
    ...serviceSkills.map((s) => s.name),
  ]);
  useEffect(() => {
    if (!isLoading && !isError) {
      const reducedResources =
        resources?.reduce<{ [k: string]: Resource }>(
          (resource, currentValue) => {
            resource[currentValue._id] = currentValue;
            return resource;
          },
          {}
        ) ?? {};
      setResourceMap(reducedResources);
    }
  }, [resources, isError, isLoading]);
  return (
    <Layout>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={4}>
          <SkillCard skills={backendSkills} resourcesMap={resourcesMap} title="Backend" />
        </Grid>
        <Grid item xs={4}>
          <SkillCard skills={frontendSkills} resourcesMap={resourcesMap} title="Frontend" />
        </Grid>
        <Grid item xs={4}>
          <SkillCard skills={dbSkills} resourcesMap={resourcesMap} title="Search" />
        </Grid>
        <Grid item xs={4}>
          <SkillCard skills={otherSkills} resourcesMap={resourcesMap} title="Tools" />
        </Grid>
        <Grid item xs={4}>
          <SkillCard skills={serviceSkills} resourcesMap={resourcesMap} title="Services" />
        </Grid>
      </Grid>
    </Layout>
  );
}
