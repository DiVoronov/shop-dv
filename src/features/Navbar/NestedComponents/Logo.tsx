import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";

interface ISizeScreenParam {
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
};

interface IDisplayParam {
  displayParam: ISizeScreenParam
};

export const Logo = ( { displayParam }: IDisplayParam ) => {

  return (
    <NavLink to="/" style={{textDecoration: "none" }}>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ 
          display: {xs: displayParam.xs, md: displayParam.md}, 
          color: '#fff', 
          background: '#000', 
          padding: '5px 10px', 
          borderRadius: '10px',
          fontSize: '1rem',
          transition: 'background .2s, color .2s',
          ['&:hover']: {background: '#fff', color: '#000'}
        }}
      >
        DV-shop
      </Typography>
    </NavLink>
  );
};
