import React, { useState } from "react";
import Header from "../components/Header";
// import Note from "../components/Note";
// import CreateArea from "../components/CreateArea";
import { Sidebar } from "../components/Sidebar";
import { Box } from "@mui/material";

function Layout({ children, collapsed, handleCollapse }) {

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header handleCollapse={handleCollapse} />
      <Box sx={{ display: "flex", flex: 1 }}>
        <Sidebar collapsed={collapsed} handleCollapse={handleCollapse} />
        <Box component="main" sx={{ flex: 1, p: 2, overflowY: "auto" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
