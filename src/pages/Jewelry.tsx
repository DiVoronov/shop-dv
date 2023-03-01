import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetJewelryQuery } from "../app/api/shop.api";
import { setAllItems } from "../app/Slices/allItemsSlice";

export const Jewelry = () => {

  const { data, error, isLoading } = useGetJewelryQuery("");

  const dispatch = useDispatch()

  useEffect( () => {
    // data && dispatch(setAllItems(data))
    console.log(data) 

  }, [data]);

  return (
    <>

    </>
  );
};