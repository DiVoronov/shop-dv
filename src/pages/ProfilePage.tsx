import React from 'react';
import { Profile } from '../features/Profile/Profile';
import { WrapperUserPages } from '../features/shared/WrapperUserPages/WrapperUserPages';

export const ProfilePage = () => {
  return (
    <WrapperUserPages>
      <Profile/>
    </WrapperUserPages>
  );
};