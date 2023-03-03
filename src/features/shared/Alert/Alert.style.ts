import React from 'react';
import styled from 'styled-components';

export const StyledAlert = styled.div`
display: flex;
position: fixed;
flex-direction: column;
justify-content: space-between;
align-content: space-between;
align-items: center;
gap: 1rem;
padding: .2rem;
top: 50px;
right: 0px;
width: 300px;
height: max-content;
border-radius: 5px;
background: ${ props => props.theme.background };
color: ${ props => props.theme.color };
z-index: 1000;
opacity: .8;
& > div {
    display: flex;
    position: relative;
    
}
`;