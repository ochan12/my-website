import { Grid } from "@mui/material";
import Layout from "components/layout/Layout";
import SkillCard from "components/skill/SkillCard";
import { Resource } from "interfaces";
import { useResources } from "lib/api";
import { useBackendSkills, useFrontendSkills } from "lib/hooks";
import { useEffect, useState } from "react";

export default function Skills() {
  const backendSkills = useBackendSkills();
  const frontendSkills = useFrontendSkills();
  const [resourcesMap, setResourceMap] = useState<{ [k: string]: Resource }>(
    {}
  );
  const { resources, isLoading, isError } = useResources([
    ...backendSkills.map((s) => s.name),
    ...frontendSkills.map((s) => s.name),
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
  }, [resources]);
  return (
    <Layout>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={6}>
          <SkillCard skills={backendSkills} resourcesMap={resourcesMap} title="Backend" />
        </Grid>
        <Grid item xs={6}>
          <SkillCard skills={frontendSkills} resourcesMap={resourcesMap} title="Frontend" />
        </Grid>
      </Grid>
    </Layout>
  );
}
