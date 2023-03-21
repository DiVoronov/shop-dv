import React, { useState, useEffect } from "react";
import { useGetMenClothesQuery, useGetWomenClothesQuery } from "../app/api/shop.api";
import { WrapperForItemsLists } from "../features/shared/WrapperForItemsLists/WrapperForItemsLists";
import { IProductsObject } from "../app/api/shop.types";
import { Box, CircularProgress } from "@mui/material";
import { responseAPI } from "../env";
import { useAppDispatch } from "../app/hooks";
import { setNoResponse } from "../app/Slices/noResponseSlice";
import { setAllItems } from "../app/Slices/allItemsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export const Clothing = () => {

  const { data: dataMan, error: errorMan, isLoading: isLoadingMan } = useGetMenClothesQuery("");
  const { data: dataWoman, error: errorWoman, isLoading: isLoadingWoman } = useGetWomenClothesQuery("");

  const [ menAndWomanClothes, setMenAndWomanClothes ] = useState<IProductsObject[]>([]);
  const [ isLoading, setIsLoading ] = useState(false);

  const dispatch = useAppDispatch();
  const noResponse = useSelector((state: RootState) => state.noResponse);
  
  useEffect(() => {
    noResponse && setMenAndWomanClothes(responseAPI.clothes);
  }, [noResponse]);

  useEffect( () => {
    (dataMan && dataWoman)
    &&
    setMenAndWomanClothes([ ...dataMan, ...dataWoman]);

    (!isLoadingMan || !isLoadingWoman) 
    ? 
    setIsLoading(false) 
    : 
    (isLoadingMan && isLoadingWoman)
    &&
    setIsLoading(true)

    setTimeout( () => {
      if (isLoading || errorMan || errorWoman) {
        dispatch(setAllItems(responseAPI.allItems));
        dispatch(setNoResponse(true));
        setIsLoading(false);
        console.log('timeout');
        setMenAndWomanClothes(responseAPI.clothes);
      };
    }, 3000);

  }, [dataMan, dataWoman, isLoadingMan, isLoadingWoman ]);

  return (
    <>
      {
        isLoading && !noResponse
        ?
        <Box sx={{p: 5}}><CircularProgress /></Box>
        :
        <WrapperForItemsLists itemsList={menAndWomanClothes} role="shop"/>
      }
    </>
  );
};