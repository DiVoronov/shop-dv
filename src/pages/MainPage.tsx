import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetAllItemsQuery } from "../app/api/shop.api";
import { setAllItems } from "../app/Slices/allItemsSlice";
import { Box } from "@mui/material";
import banner from './bannerMini.png';
import { NavLink } from "react-router-dom";
import { AdvertBanner } from "../features/shared/AdvertBanner/AdvertBanner";

export const MainPage = () => {

  const { data, error, isLoading } = useGetAllItemsQuery("products");

  const dispatch = useDispatch();

  useEffect( () => {
    data && dispatch(setAllItems(data));
  }, [data]);

  return (
    <Box
      component="div"
      sx={{width: "100%",  background: '#fff'}}
    >
      <Box 
        component="div" 
        className="main-title"
        sx={{
          p: 5, mb: 5, mt: 5, 
          borderBottom: '2px solid rgba(255, 111, 87, 0.5)', 
          borderTop: '2px solid rgba(255, 111, 87, 0.5)',
        }}
      >
        ВІТАЄМО У НАШОМУ МАГАЗИНІ! 
      </Box>

      <NavLink to='/allItems' ><img src={banner} width='100%' alt="banner" style={{marginBottom: '3rem'}}/></NavLink>

      <AdvertBanner 
        background='rgba(255, 111, 87, 0.5)' 
        color='black'
        colorButton='white'
        textTitle='ПІДПИШИСЬ НА РОЗСИЛКУ ТА ОТРИМАЙ ЗНИЖКУ -10%!'
        textButton='ПІДПИСАТИСЯ'
      />
    </Box>
  );
};