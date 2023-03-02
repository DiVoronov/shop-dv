import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetElectronicsQuery } from "../app/api/shop.api";
import { setAllItems } from "../app/Slices/allItemsSlice";
import { WrapperForItemsLists } from "../features/shared/WrapperForItemsLists/WrapperForItemsLists";
import { IProductsObject } from "../app/api/shop.types";

export const Electronics = () => {

  const { data, error, isLoading } = useGetElectronicsQuery("");

  const [ electronics, setElectronics ] = useState<IProductsObject[]>([]);

  const dispatch = useDispatch()

  useEffect( () => {
    data && setElectronics(data)
  }, [data]);

  return (
    <>
      <WrapperForItemsLists itemsList={electronics} role='shop'/>
    </>
  );
};