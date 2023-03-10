import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetAllItemsQuery } from "../app/api/shop.api";
import { setAllItems } from "../app/Slices/allItemsSlice";
import { Box } from "@mui/material";
import banner from './bannerMini.png';
import bannerName from './bannerNameTwo.png';
import { NavLink } from "react-router-dom";
import { AdvertBanner } from "../features/shared/AdvertBanner/AdvertBanner";
import { CustomSlider } from "../features/Slider/Slider";

export const MainPage = () => {

  const { data } = useGetAllItemsQuery("products");

  const dispatch = useDispatch();

  useEffect( () => {
    data && dispatch(setAllItems(data));
  }, [data]);

  return (
    <Box
      component="div"
      sx={{width: "100%",  background: '#fff', overflow: 'hidden', display: 'flex', flexDirection: 'column'}}
    >
      <Box component='img' src={bannerName} width='100%' alt="banner" sx={{opacity: '.1'}}></Box>


      <NavLink to='/allItems' style={{display: 'flex'}}><img src={banner} width='100%' alt="banner" /></NavLink>
      
      <Box component='img' src={bannerName} width='100%' alt="banner" sx={{opacity: '.1'}}></Box>

      <h2 style={{margin: '0px', padding: '0px', background: 'rgba(255, 111, 87, 0.5)', color: '#fff'}}> XITИ ЦЬОГО ТИЖНЯ </h2>
      <CustomSlider/>
      
      <Box component='img' src={bannerName} width='100%' alt="banner" sx={{opacity: '.1'}}></Box>

      <AdvertBanner 
        background='rgba(255, 111, 87, 0.5)' 
        color='black'
        colorButton='white'
        textTitle='ПІДПИШИСЬ НА РОЗСИЛКУ ТА ОТРИМАЙ ЗНИЖКУ -10%!'
        textButton='ПІДПИСАТИСЯ'
      />
      <Box component='img' src={bannerName} width='100%' alt="banner" sx={{opacity: '.1'}}></Box>

    </Box>
  );
};