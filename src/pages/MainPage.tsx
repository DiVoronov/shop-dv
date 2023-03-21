import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllItemsQuery } from "../app/api/shop.api";
import { setAllItems } from "../app/Slices/allItemsSlice";
import { Box } from "@mui/material";
import banner from './bannerMini.png';
import bannerName from './bannerNameTwo.png';
import { NavLink } from "react-router-dom";
import { AdvertBanner } from "../features/shared/AdvertBanner/AdvertBanner";
import { CustomSlider } from "../features/Slider/Slider";
import { LoaderCard } from "../features/shared/LoaderCard/LoaderCard";

import { responseAPI } from "../env";
import { setNoResponse } from "../app/Slices/noResponseSlice";
import { RootState } from "../app/store";

export const MainPage = () => {

  const { data, isLoading, isError } = useGetAllItemsQuery("products");

  const noResponse = useSelector((state: RootState) => state.noResponse);
  const dispatch = useDispatch();

  useEffect(() => {
    noResponse && dispatch(setAllItems(responseAPI.allItems));
  }, [noResponse]);
  
  useEffect( () => {
    data && dispatch(setAllItems(data));
    console.log(data , 'useEffect')
    setTimeout( () => {
      if (isLoading || isError) {
        dispatch(setAllItems(responseAPI.allItems));
        dispatch(setNoResponse(true));
      };
      console.log(data, 'timeout go')
    }, 3000);
  }, [data]);

  return (
    <Box
      component="div"
      sx={{width: "100%",  background: '#fff', overflow: 'hidden', display: 'flex', flexDirection: 'column'}}
    >
      <Box component='img' src={bannerName} width='100%' alt="banner" sx={{opacity: '.1'}}></Box>


      <NavLink to='/allItems' style={{display: 'flex'}}><img src={banner} width='100%' alt="banner" /></NavLink>
      
      <Box component='img' src={bannerName} width='100%' alt="banner" sx={{opacity: '.1'}}></Box>

      {
        !isError && !noResponse
        ?
        <>
          <h2 style={{margin: '0px', padding: '0px', background: 'rgba(255, 111, 87, 0.5)', color: '#fff'}}> XITИ ЦЬОГО ТИЖНЯ </h2>
          {
            isLoading 
            ?
            <Box sx={{display: 'flex', gap: '2rem', height: '150px', p: 2}}><LoaderCard/> <LoaderCard/> <LoaderCard/></Box>
            :
            <CustomSlider/>
          }
        <Box component='img' src={bannerName} width='100%' alt="banner" sx={{opacity: '.1'}}></Box>
          
        </>
        :
        <>
          <h2 style={{margin: '0px', padding: '0px', background: 'rgba(255, 111, 87, 0.5)', color: '#fff'}}> XITИ ЦЬОГО ТИЖНЯ </h2>
          <CustomSlider/>
          <Box component='img' src={bannerName} width='100%' alt="banner" sx={{opacity: '.1'}}></Box>
        </>
      }
      
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