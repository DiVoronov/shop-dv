import React from "react";
import { Box } from "@mui/material";

export const Footer = () => {

  return (
    <Box 
      component="div"
      sx={{
        height: "3rem", 
        background: '#f0f0f0', 
        borderTop: '2px solid #555', 
        p: 3
      }}
    >
      <Box component="div" sx={{display: "flex"}}>
        Copyright © DV
      </Box>
      
    </Box>
  );
};