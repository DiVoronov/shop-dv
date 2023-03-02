import React from 'react';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

interface IOrderBuyButtonProps {
  role: 'shop' | 'cart'
};

export const OrderBuyButton: React.FC<IOrderBuyButtonProps> = ({ role }) => {
  
  const icon = () => 
    role === 'shop'
    ?
    <ShoppingCartIcon />
    :
    <ShoppingBagIcon/>

  return (
    <Stack direction="row" spacing={2} sx={{width: '100%'}}>
      <Button 
        variant="outlined" 
        startIcon={icon()} 
        onClick={() => {}}
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