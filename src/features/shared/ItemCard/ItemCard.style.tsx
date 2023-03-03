import React from 'react';
import styled from 'styled-components';

export const StyledItemCard = styled.div`
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
gap: .5rem;
width: 40%;
flex-wrap: wrap;
border: 2px solid #5f5f5f2e;
border-radius: 10px;
box-shadow: 1px 1px 10px #888;
transition: transform .1s ease-in-out;
max-height: 600px;
overflow: hidden;
box-sizing: border-box;
flex-wrap: nowrap;
animation: appear .2s ease-out;

& .item-delete {
    position: relative;
    width: 24%;
    cursor: pointer;
    & > div {
        position: absolute;
        top: 5px;
        right: -150%;
    }
}

&:hover {
    transform: scale(1.04);
}

& .item-img {
    
    & img {
        border-radius: 10px;
        max-height: 300px;
        overflow: hidden;
    }
}


& .item-title, .item-description, .item-price-id-box {
    padding: 1rem;
}

& .item-title {
    color: #000;
    font-size: 1.2rem;
    font-weight: 800;
    text-align: center;
    padding-bottom: 0px;
}

& .item-description {
    color: #202020;
    font-size: .9rem;
    font-weight: 500;
    text-align: justify;
    max-height: 135px;
    overflow: hidden;
}

& .item-price-id-box {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

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

@media screen and (max-width: 650px) {
    width: 90%;
}

@media screen and (min-width: 1100px) {
    width: 25%;
}

@keyframes appear {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`;