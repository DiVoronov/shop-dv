import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useGetAllItemsQuery } from "../app/api/shop.api";
import { setAllItems } from "../app/Slices/allItemsSlice";
import { Box, Button } from "@mui/material";
import { InputsLoginRegistration } from "../features/shared/InputsLoginRegistration/InputsLoginRegistration";

import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { setLoginStatus } from "../app/Slices/isLoginSlice";

export const LoginPage = () => {

  const { data, error, isLoading } = useGetAllItemsQuery("products");

  const dispatch = useDispatch();

  useEffect( () => {
    data && dispatch(setAllItems(data));
  }, [data]);

  const isLogin = useSelector( (state: RootState) => state.isLogin);

  const handleLoginFirebase = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(setLoginStatus(true));
      })
      .catch((error) => {
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