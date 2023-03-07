import React from 'react';
import styled from 'styled-components';

export const StyledScroll = styled.div`
display: flex;
position: fixed;
top: 90%;
right: 5%;
opacity: 0.6;
padding: .6rem;
background: #fff;
border-radius: 50%;
transition: transform .6s, opacity .6s;
&:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.1);
}
& div {
    display: flex;
    justify-content: center;
    align-items: center;
}
`;