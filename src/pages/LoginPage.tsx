import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
// import { useGetAllItemsQuery } from "../app/api/shop.api";
// import { setAllItems } from "../app/Slices/allItemsSlice";
import { Box, Button } from "@mui/material";
import { InputsLoginRegistration } from "../features/shared/InputsLoginRegistration/InputsLoginRegistration";

import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { setLoginStatus } from "../app/Slices/isLoginSlice";
import { WrapperUserPages } from "../features/shared/WrapperUserPages/WrapperUserPages";
import { updateUserInfo } from "../app/Slices/userInfoProfileSlice";

export const LoginPage = () => {

  // const { data, error, isLoading } = useGetAllItemsQuery("products");

  const dispatch = useDispatch();
  const myStorage = window.localStorage;

  // useEffect( () => {
  //   data && dispatch(setAllItems(data));
  // }, [data]);

  const isLogin = useSelector( (state: RootState) => state.isLogin);

  const handleLoginFirebase = (email: string, password: string) => {

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const informationAboutUser = {
          email: userCredential.user.email,
          creationTime: userCredential.user.metadata.creationTime,
          lastSignInTime: userCredential.user.metadata.lastSignInTime,
        };
        dispatch(updateUserInfo(informationAboutUser));
        myStorage.setItem('userLogIn', JSON.stringify(informationAboutUser));
        dispatch(setLoginStatus(true));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogoutFirebase = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log('Success')
      dispatch(setLoginStatus(false));
      myStorage.setItem('userLogIn', 'NO');
    }).catch((error) => {
      console.log(error)
    });
  };

  return (
    <WrapperUserPages>
      {
        !isLogin 
        ?
        <InputsLoginRegistration role='login' firebaseFunction={handleLoginFirebase}/>
        :
        <Box sx={{margin: 5}}>
          <Box sx={{margin: 5}}>Ви вже увійшли до акаунту</Box>
          <Button onClick={handleLogoutFirebase} sx={{}}>Вийти</Button>
        </Box>
        
      }

    </WrapperUserPages>
  );
};