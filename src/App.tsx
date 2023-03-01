import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Navbar } from "./features/Navbar/Navbar";
import { Footer } from "./features/Footer/Footer";
import { Cart } from "./pages/Cart";
import { Clothing } from "./pages/Clothing";
import { Electronics } from "./pages/Electronics";
import { Jewelry } from "./pages/Jewelry";
import { ErrorPage } from "./pages/ErrorPage";
import { ItemsListAll } from './pages/ItemsListAll';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/allItems" element={<ItemsListAll/>} />
          <Route path="/clothing" element={<Clothing/>} />
          <Route path="/electronics" element={<Electronics/>} />
          <Route path="/jewelry" element={<Jewelry/>} />
          <Route path="/*" element={<ErrorPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
