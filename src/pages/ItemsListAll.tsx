import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { IProductsObject } from "../app/api/shop.types";
import { useGetAllItemsQuery } from "../app/api/shop.api";
import { setAllItems } from "../app/Slices/allItemsSlice";
import { Box } from "@mui/material";
import { WrapperForItemsLists } from "../features/shared/WrapperForItemsLists/WrapperForItemsLists";

export const ItemsListAll = () => {

  const [ item, setItem ] = useState({
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
  })

  const { data, error, isLoading } = useGetAllItemsQuery("products");

  const dispatch = useDispatch();

  useEffect( () => {
    data && dispatch(setAllItems(data));
  }, [data]);

  const allItems = useSelector( (state: RootState) => state.allItems);

  const clothing = allItems.filter( (element: IProductsObject) => element.category === "men's clothing" || element.category === "women's clothing");
  const mansClothes = allItems.filter( (element: IProductsObject) => element.category === "men's clothing");
  const womansClothes = allItems.filter( (element: IProductsObject) => element.category === "women's clothing");
  const electronics = allItems.filter( (element: IProductsObject) => element.category === "electronics");
  const jewelry = allItems.filter( (element: IProductsObject) => element.category === "jewelery");

  return (
    <Box
      component="div"
      sx={{width: "100%", minHeight: "80vh", background: '#f0f0f0'}}
    >
      <WrapperForItemsLists itemsList={allItems} role="shop"/>

    </Box>
  );
};