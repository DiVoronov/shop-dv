import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { IProductsObject } from "../app/api/shop.types";
import { useGetAllItemsQuery } from "../app/api/shop.api";
import { setAllItems } from "../app/Slices/allItemsSlice";
import { Box } from "@mui/material";
import { InputsLoginRegistration } from "../features/shared/InputsLoginRegistration/InputsLoginRegistration";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

export const RegistrationPage = () => {

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

  const handleRegistration = (email: string, password: string) => {
    const auth = getAuth(app);
    console.log(auth);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
      });
  };

  return (
    <Box
      component="div"
      sx={{width: "100%", background: '#f0f0f0'}}
    >
      <InputsLoginRegistration role='registration' firebaseFunction={handleRegistration}/>
    </Box>
  );
};