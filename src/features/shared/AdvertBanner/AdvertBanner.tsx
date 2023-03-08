import { Box } from '@mui/material';
import React from 'react';
import { StyledAdvertBanner } from './AdvertBanner.style';

interface IAdvertBannerProps {
  background: string
  color: string
  colorButton: string
  textTitle: string
  textButton: string
};

export const AdvertBanner: React.FC<IAdvertBannerProps> = ({ background, color, colorButton, textTitle, textButton }) => {

  const theme = {
    background,
    color,
    colorButton,
  };

  return (
    <StyledAdvertBanner theme={theme}>
      <Box component='div' className='adv-banner-text'>
        { textTitle }
      </Box>
      <Box component='div' className='adv-banner-button'>
        { textButton }
      </Box>
    </StyledAdvertBanner> 
  );
};