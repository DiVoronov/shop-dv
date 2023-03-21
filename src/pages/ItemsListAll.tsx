import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useGetAllItemsQuery } from "../app/api/shop.api";
import { setAllItems } from "../app/Slices/allItemsSlice";
import { Box, CircularProgress } from "@mui/material";
import { WrapperForItemsLists } from "../features/shared/WrapperForItemsLists/WrapperForItemsLists";
import { Loader } from "../features/shared/Loader/Loader";
import { responseAPI } from "../env";
import { setNoResponse } from "../app/Slices/noResponseSlice";

export const ItemsListAll = () => {

  const { data, error, isLoading } = useGetAllItemsQuery("products");
  const noResponse = useSelector((state: RootState) => state.noResponse);
  const allItems = useSelector( (state: RootState) => state.allItems);

  const dispatch = useDispatch();

  useEffect(() => {
    noResponse && dispatch(setAllItems(responseAPI.allItems));
  }, [noResponse]);
  
  useEffect( () => {
    data && dispatch(setAllItems(data));
    setTimeout( () => {
      if (isLoading || error) {
        dispatch(setAllItems(responseAPI.allItems));
        dispatch(setNoResponse(true));
      };
      console.log(data, 'timeout go')
    }, 3000);
  }, [data]);


  return (
    <Box
      component="div"
      sx={{width: "100%", minHeight: "80vh", background: '#fff'}}
    >
      {
        isLoading && !noResponse
        ?
        <Box sx={{p: 5}}><CircularProgress /></Box>
        :
        <WrapperForItemsLists itemsList={allItems} role="shop"/>
      }
    </Box>
  );
};