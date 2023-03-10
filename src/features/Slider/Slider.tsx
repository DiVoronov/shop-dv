/* eslint-disable no-useless-computed-key */
import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useGetAllItemsQuery } from '../../app/api/shop.api';
import { useDispatch } from 'react-redux';
import { setAllItems } from '../../app/Slices/allItemsSlice';
import { ItemCardCarousel } from '../shared/ItemCardCarousel/ItemCardCarousel';
import { Box } from '@mui/material';
import bannerName from '../../pages/bannerNameTwo.png';
import { StyledSlider } from './Slider.style';
import { Slide } from './Slide';

const CustomButton = () => {
  return (
    <button
    className={''}
    style={{ display: "flex", background: "red" }}
    onClick={()=> {}}
    >NEXT</button>
  )
}

export const CustomSlider = () => {
  
  const { data } = useGetAllItemsQuery("products");

  const [ windowWidth, setWindowWidth ] = useState(0);

  const dispatch = useDispatch();

  useEffect( () => {
    data && dispatch(setAllItems(data));
  }, [data]);

  // useEffect( () => {
  //   // setWindowWidth(window.innerWidth);
  //   console.log(window.screen.width);
  //   console.log(window.innerWidth);
  //   // document.querySelector()

  // }, [window.screen.width, window.innerWidth]);
  function handleResize() {
    window.innerWidth && setWindowWidth(window.innerWidth);
  };

  useEffect( () => {
    window.innerWidth && setWindowWidth(window.innerWidth);
  }, []);
  // useEffect( () => {
  //   console.log(windowWidth);
  // }, [windowWidth]);
  
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
    // centerMode: true,
    infinite: true,
    speed: 500,
    // slidesToShow: 1,
    slidesToScroll: 1,
    
    centerPadding: "60px",
    slidesToShow: slidesToShow(),
    // nextArrow: <CustomButton/>,
    // prevArrow: <CustomButton/>,
  };

  const renderHitItems = data ? [data[0], data[5], data[2], data[3], data[11], data[1], data[19], data[7]  ] : [];

  return (
    <>
      {
        data
        &&
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
      }
    </>
  );
};

{/* <ItemCard key={index} item={item} role={role}/> */}
