import React, { useState } from 'react';
import { IProductsObject } from '../../app/api/shop.types';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentDetailedPage } from '../../app/Slices/currentDetailedItemSlice';

interface ISlide {
  item: IProductsObject
  index: number
};

export const Slide: React.FC<ISlide> = ({ item, index }) => {

  const [ displayHoverCover, setDisplayHoverCover ] = useState('none');

  const dispatch = useDispatch();

  const handleCurrentDetailedPage = () => {
    dispatch(setCurrentDetailedPage(item));
  };

  return (
    <NavLink to={`/allItems/${item.id}`} onClick={handleCurrentDetailedPage}>        
      <div onMouseEnter={() => setDisplayHoverCover('flex')} onMouseLeave={() => setDisplayHoverCover('none')} key={index} className='for-img'>
        <div className='cover-hit'>
          <div>HIT</div>
        </div>
        <img src={item.image} alt={index + 'image'}/>
        <div 
          className='hover-cover' 
          // style={{display: displayHoverCover}}
        >
          <div>
            <div>{ item.title }</div>
            <div>Price: ${ item.price }</div>
          </div>
        </div>
        
      </div>
    </NavLink>
  );
};