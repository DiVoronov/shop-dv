import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetAllItemsQuery } from "../app/api/shop.api";
import { setAllItems } from "../app/Slices/allItemsSlice";
import { Box } from "@mui/material";
import banner from './banner.png';
import { NavLink } from "react-router-dom";

export const MainPage = () => {

  const { data, error, isLoading } = useGetAllItemsQuery("products");

  const dispatch = useDispatch();

  useEffect( () => {
    data && dispatch(setAllItems(data));
  }, [data]);

  return (
    <Box
      component="div"
      sx={{width: "100%", minHeight: "80vh", background: '#f0f0f0'}}
    >
      <Box 
        component="div" 
        className="main-title"
        sx={{
          p: 5,
        }}
      >
        ВІТАЄМО У НАШОМУ МАГАЗИНІ! 
      </Box>

      <NavLink to='/allItems'><img src={banner} width='100%' alt="banner"/></NavLink>

    </Box>
  );
};