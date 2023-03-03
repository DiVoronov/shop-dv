import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import { ListNavigation } from "../ListNavigation";
import { RootState } from "../../../../app/store";
import { setMobileNavListAnchorEl, IOpenCloseAnchors } from "../../../../app/Slices/openCloseSlice";
import { IAnchorEl } from "../../Navbar";

export const mobileNavListId = "primary-search-account-menu";

export const MobileNavList = ( { anchorEl }: IAnchorEl ) => {

  const anchors: IOpenCloseAnchors = useSelector( (state: RootState) => state.openClose);
  const dispatch = useDispatch();

  const handleMobileNavListClose = () => {
    dispatch(setMobileNavListAnchorEl(false));
  };

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      id={mobileNavListId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={anchors.mobileNavListAnchorEl}
      onClose={handleMobileNavListClose}
    >
      <ListNavigation propsDir="column"/>
    </Menu>
  );
};