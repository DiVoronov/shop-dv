import React, { useState, useEffect } from "react";
import { useGetElectronicsQuery } from "../app/api/shop.api";
import { WrapperForItemsLists } from "../features/shared/WrapperForItemsLists/WrapperForItemsLists";
import { IProductsObject } from "../app/api/shop.types";

export const Electronics = () => {

  const { data, error, isLoading } = useGetElectronicsQuery("");

  const [ electronics, setElectronics ] = useState<IProductsObject[]>([]);

  useEffect( () => {
    data && setElectronics(data)
  }, [data]);

  return (
    <>
      <WrapperForItemsLists itemsList={electronics} role='shop'/>
    </>
  );
};