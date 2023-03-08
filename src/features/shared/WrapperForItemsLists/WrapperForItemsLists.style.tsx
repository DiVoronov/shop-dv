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
  /* border-bottom: 2px solid #5f5f5f2e; */
  box-shadow: 1px 1px 4px #888;
  background: #f0f0f0;
  cursor: pointer;
  text-decoration: none;
  color: #050505;
  width: 5%;
  font-size: .9rem;
  box-sizing: border-box;
  transition: background .2s;
  &:hover {
    background: #f5f5f5;
  }
  & .button-back-text {
    display: none;
  }
  & .button-back-empty {
    display: flex;
    width: 15px;
  }
  & svg {
    position: fixed;
    top: 50%;
    left: 5px;
  }
}

&  .sort-filter-menu-box {
  background: #fff;
  border-right: 1px solid #d5d5d5;
  min-width: 20%;
  box-sizing: border-box;
  padding: 1rem;

  & .show-hide-sort-filter {
    cursor: pointer;
    border: 2px solid #000;
    padding: .5rem;
    border-radius: 5px;
    background: #fff;
    color: #000;
    transition: background .2s, color .2s;
    &:hover {
      background: #000;
      color: #fff;
    }
  }

  & .sort-filter-menu-inner-box {
    display: flex;
    flex-direction: column;

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

}

& .items-list-menu-box {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  /* gap: 1rem; */
  flex-wrap: wrap;
  box-sizing: border-box;
}



@media screen and (max-width: 800px) {
  flex-direction: column;
  & .button-back {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    transition: background .2s;
    &:hover {
      background: #fff;
    }

    & .button-back-text {
      display: flex;
    }
    & .button-back-empty {
      display: none;
    }
    & svg {
      position: inherit;
      transition: transform .6s, opacity .6s;
      &:hover {
        opacity: 1;
        cursor: pointer;
        transform: scale(1.1);
      }
    }
  }
  &  .sort-filter-menu-box {
    border-right: none;
    border-bottom: 1px solid #d5d5d5;
    & .sort-filter-menu-inner-box {
      flex-direction: row;
      justify-content: center;
      gap: 2rem;
    }
  }
}
`;