import React from 'react';
import styled from 'styled-components';

export const StyledSlider = styled.div`
padding: 10px 3rem 2rem 3rem; 
background: #fff;

/* & .label-hit {
  background: rgba(255, 111, 87, 0.5);
  color: white;
  margin-bottom: 1rem !important;
} */

& a {
  text-decoration: none;
  color: #000;
}

& .slick-track {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
& .slick-next:before, .slick-prev:before {
  color: red;
  opacity: .5;
}
& .slick-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  margin: 0px 1rem
}
& .for-img {
  display: flex !important;
  /* position: absolute; */
  align-items: center;
  justify-content: center;
  width: 100%; 
  height: 200px; 
  overflow: hidden;
  object-fit: cover;
  background: #fff;
  cursor: pointer;

  &:hover {
    opacity: .5;
  }
  & img { 
    width: 100%; 
    // height: 100%; 
    overflow: hidden;
    object-fit: cover;
  }

  & .cover-hit {
    position: relative;
    /* display: flex; */
    /* align-items: center;
    justify-content: center; */
    top: -40%;
    left: 0px;
    background: rgba(255, 111, 87, 0.5);
    color: white;
    padding: 5px;

    
  }

  & .hover-cover {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
    left: 0px;
    background: white;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 5px;
      font-size: .6rem;
    }
  }
}
`;
