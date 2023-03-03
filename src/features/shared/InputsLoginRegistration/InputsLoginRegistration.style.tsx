import React from 'react';
import styled from 'styled-components';

export const StyledInputsLoginRegistration = styled.div`
margin: auto;
min-height: 100vh;
padding: 3rem;
display: flex;
justify-content: center;
background: #f0f0f0;

& .main-inputs-box {
    margin: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 2rem;
    width: 90%;
    height: max-content;
    flex-wrap: wrap;
    border: 2px solid #5f5f5f2e;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #888;
    transition: transform .1s ease-in-out;
    max-height: 600px;
    overflow: hidden;
    box-sizing: border-box;
    flex-wrap: nowrap;
    animation: appear .2s ease-out;

    & .inputs-field {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }

    & .inputs-link-to-reg-auth > a {
        text-decoration: none;
        color: inherit;
        font-size: .7em;
    }
}



`;