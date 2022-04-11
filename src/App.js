import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './Pages/Aboutus';
import Header from './Pages/Header';
import Home from './Pages/Home';
const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>        
        <Route index element={<Home />} />
        <Route path="Aboutus" element={<Aboutus />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
