import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, List, ListItemButton, ListItemText, Collapse, IconButton } from "@mui/material";
import { ExpandMore, ExpandLess, LightbulbOutlined, NoteAltOutlined } from "@mui/icons-material";
import Footer from "./Footer";
import styled from "@emotion/styled";

const links = [
  { name: 'Notes Collection', icon: LightbulbOutlined, path: 'notes', items: ['Notes 1', 'Notes 2', 'Notes 3'] },
  { name: 'Projects collection', icon: NoteAltOutlined, path: 'projects', items: ['Project 1', 'Project 2'] },
];

export const Sidebar = ({ collapsed }) => {
  const [open, setOpen] = useState("");
  const [active, setActive] = useState(""); 
  const navigate = useNavigate();
  
  // Toggle collapse for specific section
  const handleToggle = (section) => {
    setActive(section); 
    setOpen((prevState) => (prevState === section ? "" : section));
  };

  // Handle navigation based on section
  const handleNavigate = (section) => {
    setActive(section);
    const link = links.find(link => link.name === section);
    if (link) {
      navigate(`/${link.path}`);
    }
  };

  return (
    <StyledNavProvider sx={{ width: collapsed ? 90 : 300 }}>
      <Box>
        {links.map((link) => (
          <List sx={{ padding: "0", fontSize: "30px", marginTop: "16px" }} key={link.name}>
            <ListItemButton
              sx={{
                backgroundColor: active === link.name ? "#ccc" : "transparent",
                "&:hover": {
                  backgroundColor: active === link.name ? "#ccc" : "transparent",
                },
              }}
              onClick={() => handleNavigate(link.name)}
            >
              <link.icon />
              {!collapsed && (
                <>
                  <ListItemText
                    primary={link.name}
                    sx={{ paddingTop: "2px", paddingLeft: "10px" }}
                  />
                  <IconButton onClick={() => handleToggle(link.name)} edge="end">
                    {open === link.name ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </>
              )}
            </ListItemButton>

            <Collapse in={open === link.name && !collapsed} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {link.items.map((item, index) => (
                  <ListItemButton sx={{ paddingLeft: 8, borderRadius: "20px" }} key={index}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </List>
        ))}
      </Box>
      {!collapsed && <Footer />}    
    </StyledNavProvider>
  );
};

const StyledNavProvider = styled(Box)({
  display: "flex", 
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "white",
  paddingTop: 2,
  // transition: "width 0.3s",
});
