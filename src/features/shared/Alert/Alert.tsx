import React from 'react';
import { Box } from '@mui/material';
import { StyledAlert } from './Alert.style';

interface IAlert {
  isLogin: boolean
};

export const Alert: React.FC<IAlert> = ({ isLogin }) => {

  const theme = {
    background: isLogin ? '#d3f3dd' : '#f2c8c8',
    color: isLogin ? '#275034' : '#a54a4a'
  };
  
  return (
    <StyledAlert theme={theme}>
      <Box component='div' className='alert-title'>
        {
          isLogin ? 'Вітаю!' : 'Увага!'
        }
      </Box>
      <Box component='div' className='alert-description'>
        {
          isLogin ? 'Ви щойно придбали товар' : 'Для того, щоб придбати товар, необхідно авторизуватися!'
        }
      </Box>
    </StyledAlert>
  );
};