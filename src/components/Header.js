import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  Box,
  Button,
  Typography,
  Drawer,
  List,
  ListItem,
  styled,
  Divider,
} from "@mui/material";
import {
  Menu, 
  Highlight,
  AccountCircleOutlined,
  PersonOutlined,
  SettingsOutlined,
  LogoutOutlined,
} from "@mui/icons-material";

function Header({handleCollapse}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    sessionStorage.clear("access_token");
    navigate("/");
    Swal.fire({
      title: "Success!",
      text: "Logout Successfully!",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <StyledHeader>
      <Box className="header-logo">
        <Menu
          onClick={handleCollapse}
          sx={{  color: "white", cursor:"pointer" }}
        />
        <Highlight fontSize="large" className="title-icon" />
        UpKeep
      </Box>
      <Button>
        <AccountCircleOutlined
          onClick={handleDrawerToggle}
          sx={{ fontSize: "35px", color: "white" }}
        />
      </Button>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerToggle}
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
            padding: "20px",
          },
        }}
      >
        {/* Sidebar Content */}
        <Box>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Hi Akshay
          </Typography>
          <List>
            <ListItem
              sx={{
                cursor: "pointer",
                justifyContent: "start",
                gap: 2,
                borderRadius: "10px",
                marginBottom: 1,
                padding: "12px 16px",
                "&:hover": { backgroundColor: "#f4f4f4" },
              }}
            >
              <PersonOutlined />
              <Typography>Profile</Typography>
            </ListItem>
            <ListItem
              sx={{
                cursor: "pointer",
                justifyContent: "start",
                gap: 2,
                borderRadius: "10px",
                marginBottom: 1,
                padding: "12px 16px",
                "&:hover": { backgroundColor: "#f4f4f4" },
              }}
            >
              <SettingsOutlined />
              <Typography>Settings</Typography>
            </ListItem>
            <Divider sx={{ margin: "20px 0" }} />
            <ListItem
              onClick={handleLogout}
              sx={{
                cursor: "pointer",
                justifyContent: "start",
                gap: 2,
                borderRadius: "10px",
                marginBottom: 1,
                bgcolor: "#f5ba13",
                color: "white",
                padding: "12px 16px",
                "&:hover": { backgroundColor: "#cd9a09" },
              }}
            >
              <LogoutOutlined />
              <Typography>Logout</Typography>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#f5ba13",
  padding: "16px 32px",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
  "& .header-logo": {
    color: "#fff",
    fontFamily: "'McLaren', cursive",
    fontSize: "30px",
  },
  "& .drawer-toggle-button": {
    color: "white",
    border: "2px solid white",
    fontWeight: "bold",
    borderRadius: "30px",
    padding: "8px 16px",
  },
  "@media (max-width: 768px)": {
    padding: "16px 30px",
  },
  "@media (max-width: 480px)": {
    padding: "16px 20px", 
  },
});
