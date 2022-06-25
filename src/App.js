import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './Pages/Aboutus';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>        
        <Route index element={<Home />} />
        <Route path="Aboutus" element={<Aboutus />} />
        <Route path="Login" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
