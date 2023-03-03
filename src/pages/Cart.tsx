import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { WrapperForItemsLists } from '../features/shared/WrapperForItemsLists/WrapperForItemsLists';
import { IProductsObject } from '../app/api/shop.types';
import { Box } from '@mui/material';
import { Alert } from '../features/shared/Alert/Alert';

export const Cart = () => {

  const cart = useSelector( (state: RootState) => state.cart );
  const isLogin = useSelector( (state: RootState) => state.isLogin);
  const isAlert = useSelector( (state: RootState) => state.alert);

  const myStorage = window.localStorage;

  const [ storageCart, setStorageCart ] = useState<IProductsObject[]>([]);
  console.log(storageCart);
  useEffect( () => {
    if (cart.length === 0) {
      const cartFromLocaleStorage = myStorage.getItem('initialState');
      if (cartFromLocaleStorage !== null) {
        const parseItems = JSON.parse(cartFromLocaleStorage);
        setStorageCart(parseItems);
      };
    };
  }, [myStorage.length]);

  // useEffect( () => {

  //   for (let i = 0; i < myStorage.length; i++) {
  //     const key = myStorage.key(i);
  //     const newItem = myStorage.getItem(key!);
      
  //     if (newItem) {
  //       const parseItem = JSON.parse(newItem);
  //       const newArray = [ ...storageCart ];
  //       newArray.push(parseItem);
  //       setStorageCart(newArray);
  //       console.log(newArray);
  //       console.log(parseItem);
  //     }

      // const parseItem = () => typeof newItem === 'string' && JSON.parse(newItem);
      // const itemFromLocalStorage = parseItem();
      // const newArray = [ ...storageCart ];
      // newArray.push(itemFromLocalStorage);
      // setStorageCart(newArray);
      // console.log(newArray);
      // console.log(parseItem())

  //   }
  // }, [myStorage.length])


  return (
    <Box>
      {
        isLogin && isAlert && <Alert isLogin={isLogin}/>
      }
      {
        !isLogin && isAlert && <Alert isLogin={isLogin}/>
      }
      <Box>
        {
          cart.length !== 0
          ?
          <WrapperForItemsLists itemsList={cart} role='cart'/>
          :
          <WrapperForItemsLists itemsList={storageCart} role='cart'/>
        }
      </Box>
      
    </Box>
  );
};