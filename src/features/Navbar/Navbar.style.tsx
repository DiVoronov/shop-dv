import React from 'react';
import styled from 'styled-components';

export const StyledNavbar = styled.div`
position: ${ props => props.theme.position };
width: 100%;
top: ${ props => props.theme.position === 'fixed' ? '0px' : 'none' };
left: ${ props => props.theme.position === 'fixed' ? '0px' : 'none' };
flex-grow: 1;
border-bottom: 2px solid #555;
z-index: 1001;
`;