import React from "react";
import styled from "styled-components";

export const StyledListNavigation = styled.div`
display: flex;
flex-direction: ${ props => props.theme.flexDirection };
& a {
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: 1px;
  margin: 1rem 1.5rem;
  text-decoration: none;
  color: ${ props => props.theme.font};
}

`;
