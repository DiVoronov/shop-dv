import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useGetAllItemsQuery } from "../app/api/shop.api";
import { setAllItems } from "../app/Slices/allItemsSlice";
import { Box } from "@mui/material";
import { WrapperForItemsLists } from "../features/shared/WrapperForItemsLists/WrapperForItemsLists";

export const ItemsListAll = () => {

  const { data, error, isLoading } = useGetAllItemsQuery("products");

  const dispatch = useDispatch();

  useEffect( () => {
    data && dispatch(setAllItems(data));
  }, [data]);

  const allItems = useSelector( (state: RootState) => state.allItems);

  return (
    <Box
      component="div"
      sx={{width: "100%", minHeight: "80vh", background: '#f0f0f0'}}
    >
      <WrapperForItemsLists itemsList={allItems} role="shop"/>
    </Box>
  );
};