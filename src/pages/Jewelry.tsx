import React, { useState, useEffect } from "react";
import { useGetJewelryQuery } from "../app/api/shop.api";
import { WrapperForItemsLists } from "../features/shared/WrapperForItemsLists/WrapperForItemsLists";
import { IProductsObject } from "../app/api/shop.types";
import { Box, CircularProgress } from "@mui/material";
import { useAppDispatch } from "../app/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { responseAPI } from "../env";
import { setAllItems } from "../app/Slices/allItemsSlice";
import { setNoResponse } from "../app/Slices/noResponseSlice";

export const Jewelry = () => {

  const { data, error, isLoading } = useGetJewelryQuery("");

  const [ jewelry, setJewelry ] = useState<IProductsObject[]>([]);
  const dispatch = useAppDispatch();

  const noResponse = useSelector((state: RootState) => state.noResponse);

  useEffect(() => {
    noResponse && setJewelry(responseAPI.jewelery);
  }, [noResponse]);

  useEffect( () => {
    data && setJewelry(data);
    setTimeout( () => {
      if (isLoading || error) {
        dispatch(setAllItems(responseAPI.allItems));
        dispatch(setNoResponse(true));
        setJewelry(responseAPI.jewelery);
      };
    }, 3000);
  }, [data]);

  return (
    <>
      {
        isLoading && !noResponse
        ?
        <Box sx={{p: 5}}><CircularProgress /></Box>
        :
        <WrapperForItemsLists itemsList={jewelry} role="shop"/>
      }
    </>
  );
};