import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Navbar } from '../Navbar';

export const ParallaxNavbar = () => {
  
  const [ appearFixedNavbar, setAppearFixedNavbar ] = useState(false);

  return (
    <>
      <Parallax onEnter={() => setAppearFixedNavbar(false)} onExit={() => setAppearFixedNavbar(true)}>
        <Navbar position='inherit'/>
      </Parallax>
      {
        appearFixedNavbar && <Navbar position='fixed'/>
      }
    </>
  );
};