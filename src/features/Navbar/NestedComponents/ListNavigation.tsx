import React, { useContext } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { NavLink } from "react-router-dom";
import { StyledListNavigation } from "./ListNavigation.style";
import MenuItem from "@mui/material/MenuItem";


interface IListNavigationElement {
  title: string
  link: string
  id: number
};

interface IPropsDir {
  propsDir: string
}

export const ListNavigation = ( { propsDir }: IPropsDir ) => {

  const listNavigation: IListNavigationElement[] = [
    {id: 1, title: "All Items", link: "/allItems"}, 
    {id: 2, title: "Clothing", link: "/clothing"}, 
    {id: 3, title: "Jewelry", link: "/jewelry"}, 
    {id: 4, title: "Electronics", link: "/electronics"}
  ];

  const theme = {
    font: '#333',
    flexDirection: propsDir,
  };

  return (
    <StyledListNavigation theme={theme}>
      { listNavigation.map( (element: IListNavigationElement) => {
        return(
          <NavLink to={element.link} key={element.id}>{element.title}</NavLink>
        )
      }) }
    </StyledListNavigation>
  );
};