import React, { useState, useEffect } from 'react';
import { StyledDetailedCard } from './DetailedCard.style';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { IProductsObject } from '../../../app/api/shop.types';
import { BasicRating } from '../Rating/Rating';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams } from 'react-router-dom';
import { useGetAllItemsQuery } from '../../../app/api/shop.api';
import { Loader } from '../Loader/Loader';

export const DetailedCard = () => {

  const { id } = useParams();

  const { data, isLoading } = useGetAllItemsQuery("products");

  const [ currentDetailedItem, setCurrentDetailedItem ] = useState<IProductsObject | undefined>(undefined);

  useEffect(() => {
    const requiredItem = data && data.find( item => item.id.toString() === id );
    requiredItem && setCurrentDetailedItem(requiredItem);
  }, [data]);

  return ( 
    <StyledDetailedCard>
      <NavLink to='/allItems' className='button-back-detailed'>
          <ArrowBackIcon/>
          Повернутися до списку
      </NavLink>
      {
        isLoading 
        ?
        <Loader/>
        :
        currentDetailedItem
        ?
        <Box component='div' className='current-item-card-detailed'>
          <Box component='div' className='item-img-detailed'>
            <img src={currentDetailedItem.image } alt={currentDetailedItem.title } width='99%'/>
          </Box>
          <Box component='div' className='current-item-card-title-description-detailed'>
            <Box component='div' className='item-title-detailed'>{currentDetailedItem.title }</Box>
            <Box component='div' className='item-description-detailed'>{currentDetailedItem.description }</Box>
            <Box component='div' className='item-price-id-box-detailed'>
              <Box component='div' className='item-price-detailed'>
                Ціна: ${currentDetailedItem.price }
              </Box>
              <Box component='div' className='item-number-id-detailed'>
                Артикул: {currentDetailedItem.id }
              </Box>
            </Box>
            <Box>
              <BasicRating estimate={currentDetailedItem.rating.rate} allVotes={currentDetailedItem.rating.count}/>
            </Box>
          </Box>
          
        </Box>
        :
        <Box component='a' href='/allItems'>Перезавантажте, будь-ласка, сторінку</Box>
      }
      
    </StyledDetailedCard>
  );
};
