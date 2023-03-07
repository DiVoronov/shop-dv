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
    <NavLink to="/" style={{textDecoration: "none", }}>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: {xs: displayParam.xs, md: displayParam.md} }}
      >
        DV-shop
      </Typography>
    </NavLink>
  );
};