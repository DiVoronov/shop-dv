import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { StyledDetailedCard } from './DetailedCard.style';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { IProductsObject } from '../../../app/api/shop.types';
import { BasicRating } from '../Rating/Rating';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const DetailedCard = () => {

  const detailedStore: IProductsObject | null = useSelector( (state: RootState) => state.currentDetailedItem );
  const allItems = useSelector( (state: RootState) => state.allItems );

  const [ currentDetailedItem, setCurrentDetailedItem ] = useState<IProductsObject>(allItems[0]);

  useEffect(() => {
    detailedStore && setCurrentDetailedItem(detailedStore);
  }, [detailedStore]);

  return ( 
    <StyledDetailedCard>
      <NavLink to='/allItems' className='button-back-detailed'>
        {/* <Box component='button' className='button-back-detailed'> */}
          <ArrowBackIcon/>
          Повернутися до списку
        {/* </Box> */}
      </NavLink>
      {
        currentDetailedItem !== null
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
        <>Please, refresh the page</>
      }

      
    </StyledDetailedCard>
  );
};
