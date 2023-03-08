import React from 'react';
import styled from 'styled-components';

export const StyledAdvertBanner = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
margin: 1rem 0px;
padding: 2rem;
gap: 4rem;
flex-wrap: wrap;
background: ${ props => props.theme.background };
margin: 4rem 0px;

& .adv-banner-text {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 5px;
  color: ${ props => props.theme.color };
  max-width: 40%;
}

& .adv-banner-button {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-size: 1.5rem;
  color: ${ props => props.theme.colorButton };
  background: ${ props => props.theme.color };
  width: 35%;
  z-index: 1000;
  transition: margin .1s, transform .1s;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    z-index: 900;
    border: 2px solid ${ props => props.theme.color };
    top: 7px;
    left: 7px;
    width: 100%;
    height: 100%;
    transition: top .1s, left .1s;

  }

  &:hover {
    transform: scale(0.95);
    &::before {
      top: -2px;
      left: -2px;
    }
  }
}

@media screen and (max-width: 800px) {
  gap: 2rem;

  & .adv-banner-text {
    font-size: 1rem;
    max-width: 40%;
  }
  & .adv-banner-button {
    font-size: .9rem;
  }
}
@media screen and (max-width: 600px) {
  gap: 1rem;

  & .adv-banner-text {
    max-width: 100%;

  }
  & .adv-banner-button {
    width: 100%;
  }
}
`;