import React from 'react';
import { Box } from '@mui/material';
import { StyledWrapperForItemsLists } from './WrapperForItemsLists.style';
import { ItemCard } from '../ItemCard/ItemCard';
import { IProductsObject } from '../../../app/api/shop.types';

interface IWrapperForItemsListsProps {
  itemsList: IProductsObject[]
  categories?: any[]
  sortPoints?: any[]
};

export const WrapperForItemsLists: React.FC<IWrapperForItemsListsProps> = ({ itemsList, categories, sortPoints }) => {

  return (
    <StyledWrapperForItemsLists>
      <Box component='div' className='sort-filter-menu-box'>
        <Box component='div' className='sort-menu-box'></Box>
        <Box component='div' className='filter-menu-box'></Box>
      </Box>
      <Box component='div' className='items-list-menu-box'>
        {
          itemsList.map( (item, index) => {
            return (
              <ItemCard key={index} item={item}/>
            );
          })
        }
      </Box>
    </StyledWrapperForItemsLists>
  );
};