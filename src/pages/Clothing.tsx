import React, { useState, useEffect } from "react";
import { useGetMenClothesQuery, useGetWomenClothesQuery } from "../app/api/shop.api";
import { WrapperForItemsLists } from "../features/shared/WrapperForItemsLists/WrapperForItemsLists";
import { IProductsObject } from "../app/api/shop.types";

export const Clothing = () => {

  const { data: dataMan, error: errorMan, isLoading: isLoadingMan } = useGetMenClothesQuery("");
  const { data: dataWoman, error: errorWoman, isLoading: isLoadingWoman } = useGetWomenClothesQuery("");

  const [ menAndWomanClothes, setMenAndWomanClothes ] = useState<IProductsObject[]>([]);

  useEffect( () => {
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