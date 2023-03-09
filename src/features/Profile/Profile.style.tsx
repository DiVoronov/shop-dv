import React from 'react';
import styled from 'styled-components';

export const StyledProfile = styled.div`
display: flex;
width: 100%;
align-items: center;
padding: 2rem;
gap: 4rem;
flex-wrap: wrap;
flex-direction: column;
min-height: 100vh;

& .profile-title {
  font-size: 2.5rem;
  font-weight: 900;
}

& .profile-photo-info {
  display: flex;
  width: 100%;
  

  & .profile-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0px 2rem;
    background: #ededed;
  }

  & .profile-info {
    width: 60%;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    color: grey;

    & > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      flex-wrap: wrap;
      & > div {
        margin: .5rem;
      }
      & .gray {
        color: #000;
      }
      
    }
    

  }
}

@media screen and (max-width: 700px) {
  & .profile-photo-info {
    flex-direction: column;
    & .profile-photo {
      display: flex;
      margin: 1rem auto;
      justify-content: center;
    }
    & .profile-info {
      width: 100%;
    }
  }
}
`;