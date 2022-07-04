import { Category } from '@mui/icons-material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './Pages/Aboutus';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Offer from './Pages/Offer';
import Product from './Pages/Product';
import Profile from './Pages/Profile';
import SearchPage from './Pages/Search_page';
import SignUp from './Pages/SignUp';
const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>        
        <Route index element={<Home />} />
        <Route path="Aboutus" element={<Aboutus />} />
        <Route path="Login" element={<Login />} />
        <Route path="Category" element={<Category />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="SearchBar" element={<SearchPage />} />
        <Route path="Product" element={<Product />} />
        <Route path="Offer" element={<Offer />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
