import React from 'react';
import styled from 'styled-components';

export const StyledWrapperForItemsLists = styled.div`
display: flex;
min-height: 100vh;

&  .sort-filter-menu-box {
  background: #e5e5e5;
  border-right: 2px solid #d5d5d5;
  min-width: 20%;
  box-sizing: border-box;
  padding: 1rem;
  
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
  &  .sort-filter-menu-box {
    border-right: none;
    border-bottom: 2px solid #d5d5d5;

  }
}
`;