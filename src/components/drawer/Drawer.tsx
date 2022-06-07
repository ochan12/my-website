import {
  CasesOutlined,
  Code,
  FlightTakeoffOutlined,
  Home,
  HomeMaxOutlined,
  HomeOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

function DrawerHeader({ ...props }) {
  return <Box {...props}></Box>;
}

interface DrawerItem {
  title: string;
  href: string;
  icon: React.ReactElement;
}
function useDrawerItems(): DrawerItem[] {
  return [
    {
      title: "Home",
      href: "/",
      icon: <HomeOutlined fontSize="small" />,
    },
    {
      title: "Experience",
      href: "/experience",
      icon: <CasesOutlined fontSize="small" />,
    },
    {
      title: "Skills",
      href: "/skills",
      icon: <Code fontSize="small" />,
    },
    {
      title: "Travel",
      href: "/travel",
      icon: <FlightTakeoffOutlined fontSize="small" />,
    },
  ];
}

export default function AppDrawer() {
  const [open, setOpen] = useState(false);
  const handleOpenBar = () => setOpen(!open);
  const drawerItems = useDrawerItems();
  return (
    <>
      <Drawer variant="permanent">
        <DrawerHeader>
          <Grid
            container
            justifyContent={"center"}
            columnSpacing={2}
            padding={1}
            alignItems="center"
          >
            <Grid item>{"<>"}</Grid>
            <Grid item>Mateo</Grid>
            <Grid item>{"</>"}</Grid>
          </Grid>
        </DrawerHeader>
        <Divider />
        <List>
          {drawerItems.map((item) => (
            <Link href={item.href} key={item.title}>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.title}</ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
}
