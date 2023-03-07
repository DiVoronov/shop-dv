import React, { useState, useEffect } from "react";
import { useGetMenClothesQuery, useGetWomenClothesQuery } from "../app/api/shop.api";
import { WrapperForItemsLists } from "../features/shared/WrapperForItemsLists/WrapperForItemsLists";
import { IProductsObject } from "../app/api/shop.types";
import { Box, CircularProgress } from "@mui/material";

export const Clothing = () => {

  const { data: dataMan, error: errorMan, isLoading: isLoadingMan } = useGetMenClothesQuery("");
  const { data: dataWoman, error: errorWoman, isLoading: isLoadingWoman } = useGetWomenClothesQuery("");

  const [ menAndWomanClothes, setMenAndWomanClothes ] = useState<IProductsObject[]>([]);
  const [ isLoading, setIsLoading ] = useState(false);

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

  }, [dataMan, dataWoman, isLoadingMan, isLoadingWoman ]);

  return (
    <>
      {
        isLoading
        ?
        <Box sx={{p: 5}}><CircularProgress /></Box>
        :
        <WrapperForItemsLists itemsList={menAndWomanClothes} role="shop"/>
      }
    </>
  );
};