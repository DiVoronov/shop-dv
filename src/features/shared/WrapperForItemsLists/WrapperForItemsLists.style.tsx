import React from 'react';
import styled from 'styled-components';

export const StyledWrapperForItemsLists = styled.div`
display: flex;
min-height: 100vh;

& .button-back {
  display: flex;
  /* justify-content: center;
  align-content: center;
  align-items: center; */
  padding: .6rem;
  gap: .6rem;
  border-bottom: 2px solid #5f5f5f2e;
  box-shadow: 1px 1px 4px #888;
  background: #e3f5f6;
  cursor: pointer;
  text-decoration: none;
  color: #050505;
  width: 5%;
  font-size: .9rem;
  box-sizing: border-box;
  & .button-back-text {
    transform: rotate(90deg);
  }
  & svg {
    position: fixed;
    top: 74px;
    left: 10px;
  }
}

&  .sort-filter-menu-box {
  background: #e5e5e5;
  border-right: 2px solid #d5d5d5;
  min-width: 20%;
  box-sizing: border-box;
  padding: 1rem;

  & .show-hide-sort-filter {
    cursor: pointer;
    border: 2px solid #d5d5d5;
    padding: .5rem;
    border-radius: 5px;
  }
  
  & .filter-menu-box, .sort-menu-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: .4rem;
  padding: .1rem;
  margin-bottom: 2rem;
  
  & .filter-menu-box-header {
    margin-bottom: 1rem;
  }

  & .filer-sort-options {
    display: flex;
    flex-direction: row-reverse;
    justify-content: left;
    gap: 1rem;
    width: 100%;
  }
  }

}

& .items-list-menu-box {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  
}



@media screen and (max-width: 800px) {
  flex-direction: column;
  & .button-back {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: .6rem;
    gap: .6rem;
    border-bottom: 2px solid #5f5f5f2e;
    box-shadow: 1px 1px 4px #888;
    background: #e3f5f6;
    cursor: pointer;
    text-decoration: none;
    color: #050505;
    width: 100%;
    box-sizing: border-box;

    & .button-back-text {
      transform: rotate(0deg);
    }
    & svg {
      position: inherit;
    }
  }
  &  .sort-filter-menu-box {
    border-right: none;
    border-bottom: 2px solid #d5d5d5;
  }
}
`;