import React from 'react';
import { StyledWrapperUserPages } from './WrapperUserPages.style';

interface IWrapperUserPagesProps {
  children: JSX.Element
}

export const WrapperUserPages: React.FC<IWrapperUserPagesProps> = ({ children }) => {
  return (
    <StyledWrapperUserPages>
      { children }
    </StyledWrapperUserPages>
  );
};