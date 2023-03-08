import React from 'react';
import { StyledScroll } from './Scroll.style';
import { Box } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

export const Scroll = () => {

  const isScrollAppear = useSelector( (state: RootState) => state.isScrollAppear );

  const toTopPage = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return ( 
    <>
      {
        isScrollAppear
        &&
        <StyledScroll onClick={toTopPage}>
          <Box component='div' className='scroll-btn'>
            <ArrowCircleUpIcon fontSize='large' color='disabled'/>
          </Box>
        </StyledScroll>
      }
    </>
  );
};