import React from 'react';
import styled from 'styled-components';

export const StyledTicker = styled.div`
background: #000;
display: flex;
flex-wrap: no-wrap;
overflow: hidden;
& div {
  width: max-content;
  color: #fff;
  font-size: .8rem;
  padding: 3px;
  animation: ticker 100s infinite linear;
  white-space: nowrap;
}

@keyframes ticker {
  0%{
    transform: translate(0, 0);
  }
  
  100%{
    transform: translate(-160%, 0);
  }
}
`;