import React from 'react';
import { Box } from '@mui/material';
import { StyledItemCardCarousel } from './ItemCardCarousel.style';
import { IProductsObject } from '../../../app/api/shop.types';
import { OrderBuyButton } from '../OrderBuyButton/OrderBuyButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../app/Slices/cartSlice';
import { NavLink } from 'react-router-dom';
import { setCurrentDetailedPage } from '../../../app/Slices/currentDetailedItemSlice';
// import { Loader } from '../Loader/Loader';

interface IItemCardCarouselProps {
  item: IProductsObject
  role: 'shop' | 'cart'
};

export const ItemCardCarousel: React.FC<IItemCardCarouselProps> = ({ item, role }) => {

  const dispatch = useDispatch();

  const handleCurrentDetailedPage = () => {
    dispatch(setCurrentDetailedPage(item));
  };

  return (
    <StyledItemCardCarousel>
      <Box component='div' className='item-carousel-img-block'>
        <Box component='div' className='item-img'>
          <NavLink to={`/allItems/${item.id}`} onClick={handleCurrentDetailedPage}>
            <img src={ item.image } alt={ item.title }/>
          </NavLink>
        </Box>
      </Box>
      <Box component='div' className='item-carousel-info-block'>
        <Box component='div' className='item-title'>
          <NavLink to={`/allItems/${item.id}`} onClick={handleCurrentDetailedPage}>   
            { item.title }
          </NavLink>
        </Box>
        <Box component='div' className='item-description'>{ item.description }</Box>
        <Box component='div' className='item-price-id-box'>
          <Box component='div' className='item-price'>
            Ціна: ${ item.price }
          </Box>
          <Box component='div' className='item-number-id'>
            Артикул: { item.id }
          </Box>
        </Box>
        <Box sx={{width: '100%'}}>
          <OrderBuyButton role={role} item={item}/>
        </Box>
      </Box>
    </StyledItemCardCarousel>
  );
};

