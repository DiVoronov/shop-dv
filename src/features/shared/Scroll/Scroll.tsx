import React from 'react';
import { StyledScroll } from './Scroll.style';
import { Box } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export const Scroll = () => {

    const toTopPage = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    };

    return ( 
        <StyledScroll onClick={toTopPage}>
            <Box component='div' className='scroll-btn'>
                <ArrowCircleUpIcon fontSize='large' color='disabled'/>
            </Box>
        </StyledScroll>
    );
};