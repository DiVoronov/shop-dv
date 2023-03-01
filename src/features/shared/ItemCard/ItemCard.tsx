import React from 'react';
import { Box } from '@mui/material';
import { StyledItemCard } from './ItemCard.style';
import { IProductsObject } from '../../../app/api/shop.types';

interface IItemCardProps {
  item: IProductsObject
};

export const ItemCard: React.FC<IItemCardProps> = ({ item }) => {

  return (
    <StyledItemCard>
      <img src={ item.image } alt={ item.title } width='99%'/>
      <Box component='div' className='item-title'>{ item.title }</Box>
      <Box component='div' className='item-description'>{ item.description }</Box>
      <Box component='div' className='item-price-id-box'>
        <Box component='div' className='item-price'>
          Ціна: ${ item.price }
        </Box>
        <Box component='div' className='item-number-id'>
          Артикул: { item.id }
        </Box>
      </Box>
    </StyledItemCard>
  );
};

