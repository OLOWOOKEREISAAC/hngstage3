import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PlaceToStay from './components/placeToStay';
import Home from './components/home';


function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Place-To-Stay' element={<PlaceToStay/>} />
      </Routes>
      
      
    </BrowserRouter>
   </React.Fragment>
   
  );
}

export default App;
