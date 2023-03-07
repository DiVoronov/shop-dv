import React, { useState, useEffect } from "react";
import { useGetJewelryQuery } from "../app/api/shop.api";
import { WrapperForItemsLists } from "../features/shared/WrapperForItemsLists/WrapperForItemsLists";
import { IProductsObject } from "../app/api/shop.types";
import { Box, CircularProgress } from "@mui/material";

export const Jewelry = () => {

  const { data, error, isLoading } = useGetJewelryQuery("");

  const [ jewelry, setJewelry ] = useState<IProductsObject[]>([]);

  useEffect( () => {
    data && setJewelry(data);
  }, [data]);

  return (
    <>
      {
        isLoading
        ?
        <Box sx={{p: 5}}><CircularProgress /></Box>
        :
        <WrapperForItemsLists itemsList={jewelry} role="shop"/>
      }
    </>
  );
};