import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetElectronicsQuery } from "../app/api/shop.api";
import { setAllItems } from "../app/Slices/allItemsSlice";

export const Electronics = () => {

  const { data, error, isLoading } = useGetElectronicsQuery("");

  const dispatch = useDispatch()

  useEffect( () => {
    console.log(data) 

  }, [data]);

  return (
    <>
    
    </>
  );
};