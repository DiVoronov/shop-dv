import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetMenClothesQuery, useGetWomenClothesQuery } from "../app/api/shop.api";
import { setAllItems } from "../app/Slices/allItemsSlice";
import { WrapperForItemsLists } from "../features/shared/WrapperForItemsLists/WrapperForItemsLists";
import { IProductsObject } from "../app/api/shop.types";

export const Clothing = () => {

  const { data: dataMan, error: errorMan, isLoading: isLoadingMan } = useGetMenClothesQuery("");
  const { data: dataWoman, error: errorWoman, isLoading: isLoadingWoman } = useGetWomenClothesQuery("");

  const dispatch = useDispatch()

  const [ menAndWomanClothes, setMenAndWomanClothes ] = useState<IProductsObject[]>([]);

  useEffect( () => {
    // data && dispatch(setAllItems(data))
    (dataMan && dataWoman)
    &&
    setMenAndWomanClothes([ ...dataMan, ...dataWoman])
  }, [dataMan, dataWoman]);

  return (
    <>
      <WrapperForItemsLists itemsList={menAndWomanClothes} role='shop'/>
    </>
  );
};