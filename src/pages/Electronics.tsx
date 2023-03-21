import React, { useState, useEffect } from "react";
import { useGetElectronicsQuery } from "../app/api/shop.api";
import { WrapperForItemsLists } from "../features/shared/WrapperForItemsLists/WrapperForItemsLists";
import { IProductsObject } from "../app/api/shop.types";
import { Box, CircularProgress } from "@mui/material";
import { useAppDispatch } from "../app/hooks";
import { setAllItems } from "../app/Slices/allItemsSlice";
import { setNoResponse } from "../app/Slices/noResponseSlice";
import { responseAPI } from "../env";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export const Electronics = () => {

  const { data, error, isLoading } = useGetElectronicsQuery("");

  const [ electronics, setElectronics ] = useState<IProductsObject[]>([]);
  const dispatch = useAppDispatch();

  const noResponse = useSelector((state: RootState) => state.noResponse);

  useEffect(() => {
    noResponse && setElectronics(responseAPI.electronics);
  }, [noResponse]);

  useEffect( () => {
    data && setElectronics(data);
    setTimeout( () => {
      if (isLoading || error) {
        dispatch(setAllItems(responseAPI.allItems));
        dispatch(setNoResponse(true));
        setElectronics(responseAPI.electronics);
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
        <WrapperForItemsLists itemsList={electronics} role="shop"/>
      }
    </>
  );
};