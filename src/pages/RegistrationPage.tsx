import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetAllItemsQuery } from "../app/api/shop.api";
import { setAllItems } from "../app/Slices/allItemsSlice";
import { Box } from "@mui/material";
import { InputsLoginRegistration } from "../features/shared/InputsLoginRegistration/InputsLoginRegistration";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { WrapperUserPages } from "../features/shared/WrapperUserPages/WrapperUserPages";

export const RegistrationPage = () => {

  const { data, error, isLoading } = useGetAllItemsQuery("products");

  const dispatch = useDispatch();

  useEffect( () => {
    data && dispatch(setAllItems(data));
  }, [data]);

  const handleRegistration = (email: string, password: string) => {
    const auth = getAuth(app);
    console.log(auth);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <WrapperUserPages>
      <InputsLoginRegistration role='registration' firebaseFunction={handleRegistration}/>
    </WrapperUserPages>
  );
};