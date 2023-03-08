import React from 'react';
import styled from 'styled-components';

export const StyledDeleteButton = styled.div`
position: relative;
width: 24%;
cursor: pointer;
& > div {
  background: #fff;
  padding: 0px 3px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: -150%;
  opacity: .4;
  transition: opacity .1s, transform .1s;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
}
`;