import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Navbar } from '../Navbar';
import { useDispatch } from 'react-redux';
import { setScrollAppear } from '../../../app/Slices/isScrollAppearSlice';

export const ParallaxNavbar = () => {

  const [ appearFixedNavbar, setAppearFixedNavbar ] = useState(false);

  const dispatch = useDispatch();

  const handleEnterNavbar = () => {
    setAppearFixedNavbar(false)
    dispatch(setScrollAppear(false));
  }; 

  const handleExitNavbar = () => {
    setAppearFixedNavbar(true)
    dispatch(setScrollAppear(true));
  }; 

  return (
    <>
      <Parallax onEnter={handleEnterNavbar} onExit={handleExitNavbar}>
        <Navbar position='inherit'/>
      </Parallax>
      {
        appearFixedNavbar && <Navbar position='fixed'/>
      }
    </>
  );
};