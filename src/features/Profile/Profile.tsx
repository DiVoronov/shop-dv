import React from 'react';
import { Box, Button } from '@mui/material';
import { StyledProfile } from './Profile.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { NavLink } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { setLoginStatus } from '../../app/Slices/isLoginSlice';
import Skeleton from '@mui/material/Skeleton';

export const Profile = () => {
  
  const isLogin = useSelector( (state: RootState) => state.isLogin);
  const userInfoProfile = useSelector( (state: RootState) => state.userInfoProfile);

  const { email, lastSignInTime, creationTime } = userInfoProfile;

  const dispatch = useDispatch();
  const myStorage = window.localStorage;
  
  const handleLogoutFirebase = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log('Success')
      dispatch(setLoginStatus(false));
      myStorage.setItem('userLogIn', 'NO');
    }).catch((error) => {
      console.log(error)
    });
  };

  return (
    <>
      {
        isLogin && userInfoProfile.email
        ?
        <StyledProfile>
          <Box component='div' className='profile-title'>Профайл</Box>
          <Box component='div' className='profile-photo-info'>
            <Box component='div' className='profile-photo'>
              <Skeleton variant="circular" width={200} height={200} />
            </Box>
            <Box component='div' className='profile-info'>
              <Box component='div' className='profile-login'>
                <Box component='div' className='gray'>Логін:</Box><Box>{email}</Box>
              </Box>
              <Box component='div' className='profile-registration-date'>
                <Box component='div' className='gray'>Зареєстрований:</Box><Box>{creationTime}</Box>
              </Box>
              <Box component='div' className='profile-last-signIn-date'>
                <Box component='div' className='gray'>Остання авторизація:</Box><Box>{lastSignInTime}</Box>
              </Box>
            </Box>
          </Box>
          <Button onClick={handleLogoutFirebase}>Вийти</Button>
        </StyledProfile>
        :
        <StyledProfile>
          <Box component='div' className='profile-title'>Вибачте</Box>
          <Box component='div' className='profile-text-logout'>
            Ви не <NavLink to='/registration' style={{color: '#e09494'}}>зареєстровані</NavLink>  чи не <NavLink to='/login' style={{color: '#e09494'}}>увійшли</NavLink> до акаунту
          </Box>
        </StyledProfile>
      }
    </>
    
  );
};