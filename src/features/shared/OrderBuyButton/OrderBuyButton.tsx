import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../app/Slices/cartSlice';
import { IProductsObject } from '../../../app/api/shop.types';

interface IOrderBuyButtonProps {
  role: 'shop' | 'cart'
  item: IProductsObject
};

export const OrderBuyButton: React.FC<IOrderBuyButtonProps> = ({ role, item }) => {
  
  const myStorage = window.localStorage;

  const icon = () => role === 'shop' ? <ShoppingCartIcon /> : <ShoppingBagIcon/>;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    // myStorage.getItem(item.title) === null
    // &&
    // myStorage.setItem(item.title, JSON.stringify(item));
  };

  return (
    <Stack direction="row" spacing={2} sx={{width: '100%'}}>
      <Button 
        variant="outlined" 
        startIcon={icon()} 
        onClick={handleAddToCart}
        fullWidth={true}
        size='large'
        color='inherit'
        sx={{width: '100%', border: 'none', borderTop: '1px solid #5f5f5f2e'}}
      >
        {
          role === 'shop'
          ?
          <div>Додати до кошику</div>
          :
          <div>Купити</div>
        }
        
      </Button>
    </Stack>
  );
}