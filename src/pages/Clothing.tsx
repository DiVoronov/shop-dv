import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetMenClothesQuery, useGetWomenClothesQuery } from "../app/api/shop.api";
import { setAllItems } from "../app/Slices/allItemsSlice";

export const Clothing = () => {

  const { data: dataMan, error: errorMan, isLoading: isLoadingMan } = useGetMenClothesQuery("");
  const { data: dataWoman, error: errorWoman, isLoading: isLoadingWoman } = useGetWomenClothesQuery("");

  const dispatch = useDispatch()

  useEffect( () => {
    // data && dispatch(setAllItems(data))
    console.log(dataMan) 
    console.log(dataWoman) 
  }, [dataMan, dataWoman]);

  return (
    <>
    
    </>
  );
};