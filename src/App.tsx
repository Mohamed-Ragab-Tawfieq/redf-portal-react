import React from 'react';

import '../src/assets/scss/App.scss';
import { NavLink, useLocation } from 'react-router-dom';

import Topbar from './theme/Components/Topbar/Topbar';
import Footer from './theme/Components/Footer/Footer';
import Bottombar from './theme/Components/Bottombar/Bottombar';
import Header from './theme/Components/Header/Header';
import InnerPages from './theme/Components/InnerPages/InnerPages';

import chat from "./assets/images/icons/chat.svg"

const App = () => {

  const route = useLocation();

  return (
    <div className='layout'>
      <Topbar />
      {route.pathname.includes("/page") && < Header />}
      <InnerPages />
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
