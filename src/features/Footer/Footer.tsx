import React from "react";
import { Box } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../app/store";

export const Footer = () => {

  return (
    <Box 
      component="div"
      sx={{width: "100%", height: "3rem"}}
    >
      <span>I HERE FOOTER</span>
      <Box component="div" sx={{display: "flex"}}>
        {/* <FirstListLinks/> */}
        {/* <SecondListLinksContacts/> */}
        {/* <LanguageSwitch/> */}
      </Box>
      <Box component="div" sx={{display: "flex"}}>
        {/* <MediaList/> */}
        {/* <Copyright/> */}
      </Box>
    </Box>
  );
};