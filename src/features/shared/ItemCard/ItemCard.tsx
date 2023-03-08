import React from 'react';
import { Box } from '@mui/material';
import { StyledItemCard } from './ItemCard.style';
import { IProductsObject } from '../../../app/api/shop.types';
import { OrderBuyButton } from '../OrderBuyButton/OrderBuyButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../app/Slices/cartSlice';
import { NavLink } from 'react-router-dom';
import { setCurrentDetailedPage } from '../../../app/Slices/currentDetailedItemSlice';
import { DeleteButton } from './DeleteButton/DeleteButton';
// import { Loader } from '../Loader/Loader';

interface IItemCardProps {
  item: IProductsObject
  role: 'shop' | 'cart'
};

export const ItemCard: React.FC<IItemCardProps> = ({ item, role }) => {

  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleCurrentDetailedPage = () => {
    dispatch(setCurrentDetailedPage(item));
  };

  // const appropriatedDescription = () => {
  //   const complicatedWords = [];
  //   item.description.split(' ').map( (word, index) => {
  //     word.match('/') && complicatedWords.push({index, word});
  //   });
    
  //   item.description.split(' ').forEach( (word, index) => index === index )
  //   const correctDescription = '';
  // };

  return (
    <StyledItemCard>
      {
        role === 'cart'
        &&
        <DeleteButton item={item}/>
      }
      
      <Box component='div' className='item-img'>
        <NavLink to={`/allItems/${item.id}`} onClick={handleCurrentDetailedPage}>
          <img src={ item.image } alt={ item.title } width='99%'/>
        </NavLink>
      </Box>
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
      <Box sx={{width: '100%'}}>
        <OrderBuyButton role={role} item={item}/>
      </Box>
    </StyledItemCard>
  );
};

