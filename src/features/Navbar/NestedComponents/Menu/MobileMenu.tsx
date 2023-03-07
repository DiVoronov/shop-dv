import React from "react";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { setAnchorEl, setMobileMoreAnchorEl, IOpenCloseAnchors } from "../../../../app/Slices/openCloseSlice";
import { IAnchorEl } from "../../Navbar";
import { NavLink } from "react-router-dom";

export const mobileMenuId = "primary-search-account-menu-mobile";

export const MobileMenu = ( { anchorEl }: IAnchorEl ) => {

  const cart = useSelector( (state: RootState) => state.cart );
  const myStorage = window.localStorage;
  const cartFromLocaleStorage = myStorage.getItem('initialState');

  const countOfItems = () => {
    if (cart.length !== 0) {
      return cart.length;
    } else if (cartFromLocaleStorage !== null) {
      return JSON.parse(cartFromLocaleStorage).length
    } else {
      return 0;
    }
  };

  const anchors: IOpenCloseAnchors = useSelector( (state: RootState) => state.openClose);
  const dispatch = useDispatch();

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(setAnchorEl(true));
  };

  const handleMobileMenuClose = () => {
    dispatch(setMobileMoreAnchorEl(false));
  };

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={anchors.mobileMoreAnchorEl}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show items in the cart"
          color="inherit"
        >
          <Badge badgeContent={countOfItems()} color="error">
            <NavLink to='/cart'><ShoppingCartIcon color="action" /></NavLink>
          </Badge>
        </IconButton>
        <NavLink to='/cart' style={{textDecoration: 'none', color: 'inherit'}}><p>Cart</p></NavLink>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="default"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
};