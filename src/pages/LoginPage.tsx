import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { IProductsObject } from "../app/api/shop.types";
import { useGetAllItemsQuery } from "../app/api/shop.api";
import { setAllItems } from "../app/Slices/allItemsSlice";
import { Box, Button } from "@mui/material";
import { InputsLoginRegistration } from "../features/shared/InputsLoginRegistration/InputsLoginRegistration";

import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { setLoginStatus } from "../app/Slices/isLoginSlice";
// import { app } from "../firebase.config";

export const LoginPage = () => {

  const { data, error, isLoading } = useGetAllItemsQuery("products");

  const dispatch = useDispatch();

  useEffect( () => {
    data && dispatch(setAllItems(data));
  }, [data]);

  const allItems = useSelector( (state: RootState) => state.allItems);
  const isLogin = useSelector( (state: RootState) => state.isLogin);

  const clothing = allItems.filter( (element: IProductsObject) => element.category === "men's clothing" || element.category === "women's clothing");
  const mansClothes = allItems.filter( (element: IProductsObject) => element.category === "men's clothing");
  const womansClothes = allItems.filter( (element: IProductsObject) => element.category === "women's clothing");
  const electronics = allItems.filter( (element: IProductsObject) => element.category === "electronics");
  const jewelry = allItems.filter( (element: IProductsObject) => element.category === "jewelery");

  const handleLoginFirebase = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(userCredential);
        dispatch(setLoginStatus(true));
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
      });
  };

  const handleLogoutFirebase = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log('Success')
      dispatch(setLoginStatus(false));

    }).catch((error) => {
      console.log(error)
    });
  };

  return (
    <Box
      component="div"
      sx={{width: "100%", background: '#f0f0f0'}}
    >
      {
        !isLogin 
        ?
        <InputsLoginRegistration role='login' firebaseFunction={handleLoginFirebase}/>
        :
        <Button onClick={handleLogoutFirebase}>Вийти</Button>
      }

    </Box>
  );
};