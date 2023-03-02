import React, { useContext, useState } from "react";
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
import MoreIcon from "@mui/icons-material/MoreVert";
import { Logo } from "./NestedComponents/Logo";
import { MenuComponent, menuId } from "./NestedComponents/Menu/Menu";
import { MobileMenu, mobileMenuId } from "./NestedComponents/Menu/MobileMenu";
import { MobileNavList } from "./NestedComponents/Menu/MobileNavList";
import { setAnchorEl, setMobileMoreAnchorEl, setMobileNavListAnchorEl, IOpenCloseAnchors } from "../../app/Slices/openCloseSlice";
import { NavLink } from "react-router-dom";

/*
 ***       <Logo/> 
 ***       <ListNavigation/>
 ***       <FindButton/>
 ***       <CartButton/>
 ***       <LogInOutButton/>
 ***       <OpenMenuButton/>
*/

export interface IAnchorEl {
  anchorEl: null | HTMLElement
};

export function Navbar() {

  const myStorage = window.localStorage;
  const storageCart= myStorage.getItem('initialState');
  const parseCart = storageCart && JSON.parse(storageCart);
  //storageCartLength

  const cart = useSelector( (state: RootState) => state.cart );

  const dispatch = useDispatch();

  const [anchorElSerializable, setAnchorElSerializable] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorElSerializable, setMobileMoreAnchorElSerializable] = useState<null | HTMLElement>(null);
  const [mobileNavListAnchorElSerializable, setMobileNavListAnchorElSerializable] = useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSerializable(event.currentTarget);
    dispatch(setAnchorEl(true));
  };
  const handleMobileNavListOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileNavListAnchorElSerializable(event.currentTarget);
    dispatch(setMobileNavListAnchorEl(true));
  };
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorElSerializable(event.currentTarget);
    dispatch(setMobileMoreAnchorEl(true));
  };

  return (
    <Box sx={{ flexGrow: 1, borderBottom: '2px solid #555'}}>
      <AppBar position="static" sx={{background: '#f0f0f0'}}>
        <Toolbar>
          <Logo displayParam={{xs: "none", md: "flex"}} />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
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

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton> */}

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={parseCart.length} color="error">
                <NavLink to='/cart'><ShoppingCartIcon /></NavLink>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <MenuComponent anchorEl={anchorElSerializable} />
      <MobileMenu anchorEl={mobileMoreAnchorElSerializable} />
      <MobileNavList anchorEl={mobileNavListAnchorElSerializable} />

    </Box>
  );
};