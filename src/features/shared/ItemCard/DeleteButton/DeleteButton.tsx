import { Box } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../../app/Slices/cartSlice';
import { IProductsObject } from '../../../../app/api/shop.types';
import DeleteIcon from '@mui/icons-material/Delete';
import { StyledDeleteButton } from './DeleteButton.style';

interface IDeleteButtonProps {
  item: IProductsObject
};

export const DeleteButton: React.FC<IDeleteButtonProps> = ({ item }) => {

  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(removeFromCart(item.id));
  };
  
  return (
    <StyledDeleteButton onClick={handleDeleteItem}>
      <Box>
        <DeleteIcon/>
      </Box>
    </StyledDeleteButton>
  );
};