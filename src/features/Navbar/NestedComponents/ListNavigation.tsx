import React from "react";
import { NavLink } from "react-router-dom";
import { StyledListNavigation } from "./ListNavigation.style";
import { setMobileNavListAnchorEl } from "../../../app/Slices/openCloseSlice";
import { useDispatch } from "react-redux";

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
    {id: 1, title: "ВСЯ КОЛЕКЦІЯ", link: "/allItems"}, 
    {id: 2, title: "ОДЯГ", link: "/clothing"}, 
    {id: 3, title: "ПРИКРАСИ", link: "/jewelry"}, 
    {id: 4, title: "ЕЛЕКТРОНІКА", link: "/electronics"}
  ];

  const theme = {
    font: '#333',
    flexDirection: propsDir,
  };

  const dispatch = useDispatch();

  const handleCloseMobileNavListAnchorEl = () => {
    dispatch(setMobileNavListAnchorEl(false));
  };
  
  return (
    <StyledListNavigation theme={theme} onClick={handleCloseMobileNavListAnchorEl}>
      { listNavigation.map( (element: IListNavigationElement) => {
        return (
          <NavLink to={element.link} key={element.id}>{element.title}</NavLink>
        )
      }) }
    </StyledListNavigation>
  );
};