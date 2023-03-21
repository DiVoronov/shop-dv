/* eslint-disable no-useless-computed-key */
import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useGetAllItemsQuery } from '../../app/api/shop.api';
import { useDispatch, useSelector } from 'react-redux';
import { setAllItems } from '../../app/Slices/allItemsSlice';
import { StyledSlider } from './Slider.style';
import { Slide } from './Slide';
import { RootState } from '../../app/store';
import { responseAPI } from '../../env';
import { setNoResponse } from '../../app/Slices/noResponseSlice';

export const CustomSlider = () => {
  
  const { data, isLoading, isError } = useGetAllItemsQuery("products");

  const [ windowWidth, setWindowWidth ] = useState(0);

  const dispatch = useDispatch();

  const noResponse = useSelector((state: RootState) => state.noResponse);
  const allItems = useSelector( (state: RootState) => state.allItems);

  useEffect(() => {
    noResponse && dispatch(setAllItems(responseAPI.allItems));
  }, [noResponse]);
  
  useEffect( () => {
    data && dispatch(setAllItems(data));
    setTimeout( () => {
      if (isLoading || isError) {
        dispatch(setAllItems(responseAPI.allItems));
        dispatch(setNoResponse(true));
      };
    }, 3000);
  }, [data]);

  function handleResize() {
    window.innerWidth && setWindowWidth(window.innerWidth);
  };

  useEffect( () => {
    window.innerWidth && setWindowWidth(window.innerWidth);
  }, []);
  
  window.addEventListener('resize', handleResize);

  function slidesToShow() {
    if (windowWidth <= 400) {
      return 1;
    } else if ( windowWidth >= 400 && windowWidth <= 700 ) {
      return 2;
    } else if ( windowWidth >= 700 && windowWidth <= 900  ) {
      return 3;
    } else if ( windowWidth >= 900 ) {
      return 4;
    } else {
      return 1;
    }
  };

  const settings = {
    dots: windowWidth < 380 ? false : true,
    className: "center",
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    
    centerPadding: "60px",
    slidesToShow: slidesToShow(),

  };

  const renderHitItems = (data && !noResponse) 
    ? [data[0], data[5], data[2], data[3], data[11], data[1], data[19], data[7] ] 
    : [allItems[0], allItems[5], allItems[2], allItems[3], allItems[11], allItems[1], allItems[19], allItems[17] ];

  return (
    <>
      <StyledSlider>
        <Slider {...settings}>
          {
            renderHitItems.length > 0 
            &&
            renderHitItems.map( (item, index) => {
              return (
                <Slide key={index} index={index} item={item}/>
              )
            })
          }
          </Slider>
        </StyledSlider>
    </>
  );
};
