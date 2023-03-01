import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { setAnchorEl, setMobileMoreAnchorEl, IOpenCloseAnchors } from "../../../../app/Slices/openCloseSlice";
import { IAnchorEl } from "../../Navbar";

export const menuId = "primary-search-account-menu";

export const MenuComponent = ( { anchorEl }: IAnchorEl ) => {

  const anchors: IOpenCloseAnchors = useSelector( (state: RootState) => state.openClose);
  // const isMenuOpen = Boolean(anchors.anchorEl);
  const dispatch = useDispatch();

  const handleMenuClose = () => {
    dispatch(setAnchorEl(false));
    dispatch(setMobileMoreAnchorEl(false));
  };

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={anchors.anchorEl}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
};



