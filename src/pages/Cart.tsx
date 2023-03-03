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