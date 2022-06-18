import { Grid, LinearProgress } from "@mui/material";
import { Resource } from "interfaces";
import { useResources } from "lib/api";
import Image from "next/image";

const ImageCompoment = (res: Resource) => {
  let imageComponent = null;
  try {
    imageComponent = (
      <Image
        height={40}
        width={40}
        objectFit="contain"
        src={res.logo}
        alt={res.name}
        title={res.name}
      />
    );
  } catch (error) {
    imageComponent = <img src={res.logo} alt={res.name} />;
  }
  return imageComponent;
};

export default function ResourceList({
  resourcesList,
}: {
  resourcesList: string[];
}) {
  const { resources, isError, isLoading } = useResources(resourcesList);

  if (isLoading) return <LinearProgress className="m-4" color="primary" />;

  return (
    <Grid container spacing={2}>
      {resources?.map((resource) => (
        <Grid item key={resource.name}>
          <a href={resource.url}>{ImageCompoment(resource)}</a>
        </Grid>
      ))}
    </Grid>
  );
}
