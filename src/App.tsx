import React, { useState } from 'react';

import '../src/assets/scss/App.scss';
import { NavLink, useLocation } from 'react-router-dom';

import Topbar from './theme/Components/Topbar/Topbar';
import Footer from './theme/Components/Footer/Footer';
import Bottombar from './theme/Components/Bottombar/Bottombar';
import Header from './theme/Components/Header/Header';
import InnerPages from './theme/Components/InnerPages/InnerPages';

import chat from "./assets/images/icons/chat.svg"



const App = () => {
  const [isScroll, setScroll] = useState(false);
  document.addEventListener('scroll', function (e) {
    if (window.scrollY > 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  });

  const route = useLocation();

  return (
    <div className='layout'>
      <Topbar isScroll={isScroll} />
      <InnerPages isScroll={isScroll} />
      <Footer />
      <Bottombar />

      <div className="chat">
        <NavLink to="" className="stretched-link">
          <img src={chat} alt="" />
        </NavLink>
      </div>
    </div>
  );
}

export default App;
