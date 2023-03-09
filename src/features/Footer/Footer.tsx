import React from "react";
import { Box } from "@mui/material";

export const Footer = () => {

  return (
    <Box 
      component="div"
      sx={{
        height: "3rem", 
        background: '#fff', 
        borderTop: '2px solid #555', 
        p: 3
      }}
    >
      <Box component="div" sx={{display: "flex", mb: 4}}>
        Copyright © DV
      </Box>
      
    </Box>
  );
};