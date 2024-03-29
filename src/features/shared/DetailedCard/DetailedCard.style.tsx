import React from 'react';
import styled from 'styled-components';

export const StyledDetailedCard = styled.div`
padding: 2rem auto;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-content: center;
/* align-items: center; */
gap: 1rem;
width: 100%;
flex-wrap: wrap;
min-height: 100vh;
transition: transform .1s ease-in-out;
background: #fff;
overflow: hidden;
box-sizing: border-box;
animation: appear .2s ease-out;

& .button-back-detailed {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: .6rem;
    gap: .6rem;
    border-bottom: 1px solid #5f5f5f2e;
    /* box-shadow: 1px 1px 4px #888; */
    background: #f0f0f0;
    cursor: pointer;
    text-decoration: none;
    color: #050505;
    transition: background .2s;
    &:hover {
        background: #f5f5f5;
    }
}

& .current-item-card-detailed {

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    flex-wrap: wrap;
    padding: 2rem;

    & .item-img-detailed {
        max-width: 30%;
        /* width: 100%; */
        height: 250px;
        object-fit: contain;
        /* width: 250px; 
        height: 200px;  */
        
        & img {
            border-radius: 10px;
            height: 250px;
            overflow: hidden;
            max-width: 250px;
            object-fit: contain;

            /* width: 250px; */

        }
    }

    & .current-item-card-title-description-detailed {
        display: flex;
        flex-direction: column;
        width: 65%;
        gap: 1rem;

        & .item-title-detailed, .item-description-detailed, .item-price-id-box-detailed {
            padding: 1rem;
        }

        & .item-title-detailed {
            color: #000;
            font-size: 1.2rem;
            font-weight: 800;
            text-align: center;
            padding-bottom: 0px;
        }

        & .item-description-detailed {
            color: #202020;
            font-size: .9rem;
            font-weight: 500;
            text-align: justify;
            max-height: 135px;
            overflow: hidden;
        }

        & .item-price-id-box-detailed {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;

            & .item-price-detailed {
                color: #202020;
                font-size: 1rem;
                font-weight: 500;
                text-align: justify;
            }

            & .item-number-id-detailed {
                color: #888;
                font-size: .6rem;
                font-weight: 400;
                text-align: justify;
            }
        }  
    }
}

@media screen and (max-width: 700px) {

    & .current-item-card-detailed {
        & .item-img-detailed {
            max-width: 100%;
        }
        & .current-item-card-title-description-detailed {
            width: 100%;
        }
    }
}
/* 
@media screen and (min-width: 1100px) {
    width: 25%;
} */

@keyframes appear {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`;