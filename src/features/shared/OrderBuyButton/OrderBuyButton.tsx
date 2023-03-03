import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../app/Slices/cartSlice';
import { IProductsObject } from '../../../app/api/shop.types';
import { setAlert } from '../../../app/Slices/alertSlice';

interface IOrderBuyButtonProps {
  role: 'shop' | 'cart'
  item: IProductsObject
};

export const OrderBuyButton: React.FC<IOrderBuyButtonProps> = ({ role, item }) => {

  const icon = () => role === 'shop' ? <ShoppingCartIcon /> : <ShoppingBagIcon/>;

  const dispatch = useDispatch();

  const handleAddToCartOeBuy = () => {
    if (role === 'cart') {
      dispatch(setAlert(true));
      setTimeout(() => dispatch(setAlert(false)), 2000);
    } else {
      dispatch(addToCart(item));
    }
  };

  return (
    <Stack direction="row" spacing={2} sx={{width: '100%'}}>
      <Button 
        variant="outlined" 
        startIcon={icon()} 
        onClick={handleAddToCartOeBuy}
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