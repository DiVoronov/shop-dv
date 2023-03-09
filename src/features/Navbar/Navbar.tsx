import React, { useState } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ListNavigation } from "./NestedComponents/ListNavigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import MoreIcon from "@mui/icons-material/MoreVert";
import { Logo } from "./NestedComponents/Logo";
import { MenuComponent, menuId } from "./NestedComponents/Menu/Menu";
// import { MobileMenu, mobileMenuId } from "./NestedComponents/Menu/MobileMenu";
import { MobileNavList } from "./NestedComponents/Menu/MobileNavList";
import { setAnchorEl, setMobileMoreAnchorEl, setMobileNavListAnchorEl } from "../../app/Slices/openCloseSlice";
import { NavLink } from "react-router-dom";
import { StyledNavbar } from "./Navbar.style";

export interface IAnchorEl {
  anchorEl: null | HTMLElement
};

interface INavbarProps {
  position: string
};

export const Navbar: React.FC<INavbarProps> = ({ position }) => {

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

  const dispatch = useDispatch();

  const [anchorElSerializable, setAnchorElSerializable] = useState<null | HTMLElement>(null);
  // const [mobileMoreAnchorElSerializable, setMobileMoreAnchorElSerializable] = useState<null | HTMLElement>(null);
  const [mobileNavListAnchorElSerializable, setMobileNavListAnchorElSerializable] = useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSerializable(event.currentTarget);
    dispatch(setAnchorEl(true));
  };
  const handleMobileNavListOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileNavListAnchorElSerializable(event.currentTarget);
    dispatch(setMobileNavListAnchorEl(true));
  };
  // const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
  //   setMobileMoreAnchorElSerializable(event.currentTarget);
  //   dispatch(setMobileMoreAnchorEl(true));
  // };
  
  const themeNavbar = {
    position,
  };

  return (
    <StyledNavbar theme={themeNavbar}>
      <AppBar position="static" sx={{background: '#fff'}}>
        <Toolbar>
          <Logo displayParam={{xs: "none", md: "flex"}} />
          <IconButton
            size="large"
            edge="start"
            color="error"
            aria-label="open drawer"
            sx={{ ml: {xs: "none", md: 2}, display: {xs: "flex", md: "none"} }}
            onClick={handleMobileNavListOpen}
          >
            <MenuIcon />
          </IconButton>
          <Box component="div" sx={{display: {xs: "none", md: "flex"}}}>
            <ListNavigation propsDir="row"/>
          </Box>

          <Box sx={{mr: 1}}>
            <Logo displayParam={{xs: "flex", md: "none"}} />
          </Box>
          
          <Box sx={{ flexGrow: 1 }} aria-label="for flex" />

          {/* <Box sx={{ display: { xs: "none", md: "flex" } }}> */}
          <Box sx={{ display: "flex" }}>
            <IconButton
              size="large"
              aria-label="show new notifications"
              color="error"
            >
              <Badge badgeContent={countOfItems()} color="error">
                <NavLink to='/cart'><ShoppingCartIcon color='action' sx={{display: 'flex'}}/></NavLink>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="default"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          {/* <Box sx={{ display: { xs: "flex", md: "none" } }}> */}
          {/* <Box sx={{ display: 'none' }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="error"
            >
              <MoreIcon />
            </IconButton>
          </Box> */}
        </Toolbar>
      </AppBar>

      <MenuComponent anchorEl={anchorElSerializable} />
      {/* <MobileMenu anchorEl={mobileMoreAnchorElSerializable} /> */}
      <MobileNavList anchorEl={mobileNavListAnchorElSerializable} />

    </StyledNavbar>
  );
};