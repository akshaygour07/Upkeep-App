import React from "react";
import { Box, Typography } from "@mui/material"

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box sx={{position: "relative", textAlign: "center", bottom: 0, height: "2.5rem"}}>
      <Typography sx={{color: "grey"}} >Copyright ⓒ {currentYear}</Typography>
    </Box>
  );
}

export default Footer;
