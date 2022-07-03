import React from 'react';

import '../src/assets/scss/App.scss';
import { Outlet, Route, Router, Routes, useLocation } from 'react-router-dom';

import Topbar from './theme/Components/Topbar/Topbar';
import Home from './theme/Components/Home/Home';
import Footer from './theme/Components/Footer/Footer';
import Bottombar from './theme/Components/Bottombar/Bottombar';
import Header from './theme/Components/Header/Header';
import InnerPages from './theme/Components/InnerPages/InnerPages';

const App = () => {

  const route = useLocation();

  return (
    <div className='layout'>
      <Topbar />
      {route.pathname.includes("/page") && < Header />}
      <InnerPages />
      <Footer />
      <Bottombar />
    </div>
  );
}

export default App;
