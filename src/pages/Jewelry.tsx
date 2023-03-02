import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetJewelryQuery } from "../app/api/shop.api";
import { setAllItems } from "../app/Slices/allItemsSlice";
import { WrapperForItemsLists } from "../features/shared/WrapperForItemsLists/WrapperForItemsLists";
import { IProductsObject } from "../app/api/shop.types";

export const Jewelry = () => {

  const { data, error, isLoading } = useGetJewelryQuery("");

  const [ jewelry, setJewelry ] = useState<IProductsObject[]>([]);

  const dispatch = useDispatch()

  useEffect( () => {
    // data && dispatch(setAllItems(data))
    data && setJewelry(data);
  }, [data]);

  return (
    <>
      <WrapperForItemsLists itemsList={jewelry} role='shop'/>
    </>
  );
};