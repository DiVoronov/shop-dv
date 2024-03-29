import React, { useState } from 'react';
import { Box } from '@mui/material';
import { StyledInputsLoginRegistration } from './InputsLoginRegistration.style';

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

  const [ errorHandler, setErrorHandler ] = useState({
    email: false,
    password: false,
  });

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentEmail = e.currentTarget.value;
    setErrorHandler({ ...errorHandler, email: false});
    // currentEmail.match(/\w*@\w*.\w*/gmi)
    setEmail(currentEmail);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorHandler({ ...errorHandler, password: false});
    const currentPassword = e.currentTarget.value;
    setPassword(currentPassword);
  };

  const handleSendInputsInformation = () => {

    if ((password.length >= 6) && (email.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gmi))) {
      firebaseFunction && firebaseFunction(email, password);
      console.log('все верно');
    } else if ((email.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gmi)) && (password.length < 6)) {
      setErrorHandler({ ...errorHandler, password: true});
      console.log('не верній пароль');

    } else if ((password.length >= 6) && (!email.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gmi))) {
      console.log('не верній емейл');

      setErrorHandler({ ...errorHandler, email: true});
    } else {
      console.log('все не верно');
      setErrorHandler({ email: true, password: true});
    }

    // if ((password.length < 6) && (!email.match(/\w*@\w*\.\w*/gmi))) {
    //   setErrorHandler({ ...errorHandler, password: true});
    //   setErrorHandler({ ...errorHandler, email: true});
    // } else if (password.length < 6) {
    //   setErrorHandler({ ...errorHandler, password: true});
    // } else if (!email.match(/\w*@\w*\.\w*/gmi)) {
    //   setErrorHandler({ ...errorHandler, email: true});
    // } else {
    //   firebaseFunction && firebaseFunction(email, password);
    // };
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
            color={ errorHandler.email ? 'error' : 'primary' }
          />
          <Box component='div' className='inputs-error-message'>
            { errorHandler.email ? 'Некоректний E-mail' : '' }
          </Box>

          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePassword}
              color={ errorHandler.password ? 'error' : 'primary' }
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
          <Box component='div' className='inputs-error-message'>
            { errorHandler.password ? 'Пароль повинен складатися як мінімум з шести символів' : '' }
          </Box>

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

