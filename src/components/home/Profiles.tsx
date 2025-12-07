import React from "react";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { Button, Grid, Skeleton, Typography, useTheme } from "@mui/material";
import { ColorModeContext } from "components/theme/ThemeWrapper";
import { useContactInformation } from "lib/api";
import { ReactNode, useContext } from "react";

function ProfileButtons({
  link,
  content,
  type,
}: {
  content: string | ReactNode;
  link: string;
  type?: "url" | "email";
}) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Button
      variant="text"
      sx={{ color: theme.palette.primary[colorMode.theme] }}
    >
      <a href={type === "email" ? `mailto:${link}` : link}>{content}</a>
    </Button>
  );
}

function ProfileLinks() {
  const { contact, isLoading } = useContactInformation();
  return isLoading ? (
    <Grid container justifyContent={"center"}>
      <Grid size={{ xs: 6 }}>
        <Skeleton />
      </Grid>
    </Grid>
  ) : (
    <Grid container justifyContent={"center"}>
      {contact?.repository && (
        <Grid>
          <ProfileButtons
            link={contact.repository}
            content={<GitHub />}
            type="url"
          />
        </Grid>
      )}
      {contact?.linkedIn && (
        <Grid>
          <ProfileButtons
            link={contact?.linkedIn}
            content={<LinkedIn />}
            type="url"
          />
        </Grid>
      )}
    </Grid>
  );
}

export function Profiles() {
  return (
    <Grid container>
      <Grid size={{ xs: 12 }}>
        <Typography
          variant="body1"
          className="text-lg text-opacity-50 max-w-lg text-center margin-auto"
        >
          You can see my profiles at:
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <ProfileLinks />
      </Grid>
    </Grid>
  );
}
