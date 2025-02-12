import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout";

const Projects = ({collapsed, handleCollapse}) => {
  return (
    <Box>
      <Layout collapsed={collapsed} handleCollapse={handleCollapse}>
        <Typography variant="h4">Projects Page</Typography>
        {/* Add your projects content here */}
      </Layout>
    </Box>
  );
};

export default Projects;
