import React from 'react';
import styled from 'styled-components';

export const StyledItemCard = styled.div`
margin: 1rem;
padding: 2rem;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
gap: .5rem;
width: 30%;
flex-wrap: wrap;
border: 2px solid #5f5f5f;
border-radius: 10px;
box-shadow: 1px 1px 10px #888;
transition: transform .1s ease-in-out;

&:hover {
    transform: scale(1.04);
}

& img {
    border-radius: 10px;
}

& .item-title {
    color: #000;
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
}

& .item-description {
    color: #202020;
    font-size: 1rem;
    font-weight: 500;
    text-align: justify;
}

& .item-price-id-box {
    display: flex;
    width: 100%;
    margin-top: 1rem;
    justify-content: space-between;
    align-items: center;

    & .item-price {
        color: #202020;
        font-size: 1rem;
        font-weight: 500;
        text-align: justify;
    }

    & .item-number-id {
        color: #888;
        font-size: .6rem;
        font-weight: 400;
        text-align: justify;
    }
}
`;