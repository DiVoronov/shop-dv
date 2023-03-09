import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Footer } from "./features/Footer/Footer";
import { Cart } from "./pages/Cart";
import { Clothing } from "./pages/Clothing";
import { Electronics } from "./pages/Electronics";
import { Jewelry } from "./pages/Jewelry";
import { ErrorPage } from "./pages/ErrorPage";
import { ItemsListAll } from './pages/ItemsListAll';
import './App.css';
import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
import './firebase';
import { DetailedCard } from './features/shared/DetailedCard/DetailedCard';
import { ParallaxNavbar } from './features/Navbar/ParallaxNavbar/ParallaxNavbar';
import { Ticker } from './features/Ticker/Ticker';
import { Profile } from './features/Profile/Profile';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from './app/Slices/userInfoProfileSlice';
import { setLoginStatus } from './app/Slices/isLoginSlice';

function App() {

  const dispatch = useDispatch();
  const myStorage = window.localStorage;
  
  useEffect(() => {
    const informationAboutUser = myStorage.getItem('userLogIn');
    if (informationAboutUser && informationAboutUser !== 'NO') {
      dispatch(updateUserInfo(JSON.parse(informationAboutUser)));
      dispatch(setLoginStatus(true));
    }
  }, []);
  

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Ticker/>
        <ParallaxNavbar/>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/main" element={<Navigate to='/' replace />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/allItems" element={<ItemsListAll/>} />
          <Route path="/allItems/:id" element={<DetailedCard/>} />
          <Route path="/clothing" element={<Clothing/>} />
          <Route path="/electronics" element={<Electronics/>} />
          <Route path="/jewelry" element={<Jewelry/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/registration" element={<RegistrationPage/>} />
          <Route path="/*" element={<ErrorPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
