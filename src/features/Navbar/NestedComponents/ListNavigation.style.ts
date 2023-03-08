import React from "react";
import styled from "styled-components";

export const StyledListNavigation = styled.div`
display: flex;
flex-direction: ${ props => props.theme.flexDirection };
& a {
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: 1px;
  margin: 1rem;
  text-decoration: none;
  color: ${ props => props.theme.font};
  transition: transform .2s, background .2s, color .2s;
  padding: .5rem;
  border-radius: 10px;
  width: max-content;

  &:hover {
    transform: scale(1.1);
    background: #000;
    color: #fff;
  }
}



`;
