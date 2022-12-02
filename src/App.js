import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Link, Navigation} from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import News from './component/News';
import Error from './component/Error';
import Closeprice from './component/Closeprice';

function App() {

  return (
    <BrowserRouter>
      <>{<Header />}</>
      <Routes>
        <Route path='/' element={<News />}/>
        <Route path='/closeprice' element={<Closeprice />}/>
        <Route path='*' element={<Error />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
