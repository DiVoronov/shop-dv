import React, { useState } from 'react';
import { Box } from '@mui/material';
import { StyledInputsLoginRegistration } from './InputsLoginRegistration.style';
import { IProductsObject } from '../../../app/api/shop.types';
import { OrderBuyButton } from '../OrderBuyButton/OrderBuyButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../../app/Slices/cartSlice';

import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

interface IItemCardProps {
  role: 'login' | 'registration'
  firebaseFunction?: (email: string, password: string) => void
};

export const InputsLoginRegistration: React.FC<IItemCardProps> = ({ role, firebaseFunction }) => {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentEmail = e.currentTarget.value;
    // currentEmail.match(/\w*@\w*.\w*/gmi)
    setEmail(currentEmail);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentPassword = e.currentTarget.value;
    setPassword(currentPassword);
  };

  const handleSendInputsInformation = () => {
    firebaseFunction && firebaseFunction(email, password);
  };

  return (
    <StyledInputsLoginRegistration>
      <Box component='div' className='main-inputs-box'>
        <Box component='div' className='inputs-title'>
          {
            role === 'login'
            ?
            'ВХІД'
            :
            'РЕЄСТРАЦІЯ'
          }
        </Box>
        <Box component='div' className='inputs-field'>

          <TextField 
            sx={{ m: 1, width: '25ch' }}
            id="outlined-basic" 
            label="E-mail" 
            variant="outlined" 
            onChange={handleEmail}
            value={email}
          />

          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePassword}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
        <Box component='div' className='inputs-button-send'>
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={handleSendInputsInformation}>
              {
                role === 'login'
                ?
                'Увійти'
                :
                'Зареєструватися'
              }
            </Button>
          </Stack>
        </Box>
        <Box component='div' className='inputs-link-to-reg-auth'>
          {
            role === 'login'
            ?
            <NavLink to='/registration'>Зареєструватися</NavLink>
            :
            <NavLink to='/login'>Увійти</NavLink>
          }
        </Box>
      </Box>
    </StyledInputsLoginRegistration>
  );
};

