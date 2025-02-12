import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  IconButton,
} from "@mui/material";
import {
  ExpandMore,
  ExpandLess,
  LightbulbOutlined,
  NoteAltOutlined,
} from "@mui/icons-material";
import Footer from "./Footer";
import styled from "@emotion/styled";

const CollapsibleList = ({
  title,
  items,
  collapsed,
  active,
  onClick,
  handleToggle,
  icon: Icon,
  open,
}) => {
  return (
    <List sx={{ padding: "0 16px", marginTop: "16px" }}>
      <ListItemButton
        sx={{
          backgroundColor: active === title ? "#ccc" : "transparent",
          borderRadius: "20px",
          "&:hover": {
            backgroundColor: active === title ? "#ccc" : "transparent",
          },
        }}
        onClick={() => onClick(title)}
      >
        <Icon />
        {!collapsed && (
          <>
            <ListItemText
              primary={title}
              sx={{ paddingTop: "2px", paddingLeft: "10px" }}
            />
            <IconButton onClick={handleToggle} edge="end">
              {open === title ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </>
        )}
      </ListItemButton>

      <Collapse in={open === title && !collapsed} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map((item, index) => (
            <ListItemButton sx={{ paddingLeft: 8, borderRadius: "20px" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

export const Sidebar = ({collapsed}) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(""); 
  const navigate = useNavigate();
  
  const handleToggle = (section) => {
    setActive(section); // Set active section
    setOpen((prevState) => (prevState === section ? "" : section)); // Toggle collapse for specific section
  };

  const handleNavigate = (section) => {
    setActive(section);
    if (section === "Notes") {
      navigate("/notes");
    } else if (section === "Projects") {
      navigate("/projects");
    }
  };

  const notes = ["Notes 1", "Notes 2", "Notes 3"];
  const tasks = ["Project 1", "Project 2"];

  return (
    <StyledNavProvider sx={{ width: collapsed ? 90 : 300 }}>
      <Box>
        <CollapsibleList
          title="Notes"
          items={notes}
          icon={LightbulbOutlined}
          open={open}
          handleToggle={() => handleToggle()}
          onClick={handleNavigate}
          collapsed={collapsed}
          active={active}
        />
        <CollapsibleList
          title="Projects"
          items={tasks}
          icon={NoteAltOutlined}
          open={open}
          handleToggle={() => handleToggle()}
          onClick={handleToggle}
          collapsed={collapsed}
          active={active}
        />
      </Box>
      {!collapsed &&  <Footer />}    
    </StyledNavProvider>
  );
}

const StyledNavProvider = styled(Box)({
  display:"flex", 
  flexDirection:"column",
  justifyContent:"space-between",
  backgroundColor: "#f4f4f4",
  height: "91vh",
  paddingTop: 2,
  transition: "width 0.3s",
});
