import React from 'react';

import '../src/assets/scss/App.scss';
import { NavLink, useLocation } from 'react-router-dom';

import Topbar from './theme/Components/Topbar/Topbar';
import Footer from './theme/Components/Footer/Footer';
import Bottombar from './theme/Components/Bottombar/Bottombar';
import Header from './theme/Components/Header/Header';
import InnerPages from './theme/Components/InnerPages/InnerPages';

import arrowupIcon from './assets/images/icons/chev-down.svg'
import chat from "./assets/images/icons/chat.svg"

// Scroll to top button appear
const scrollBtn = document.getElementById("goTop");

const scrollTop = () => {
  if (window.scrollY > 400) {
    scrollBtn!.style.visibility = "visible";
  } else {
    scrollBtn!.style.visibility = "hidden";
  }
};

document.addEventListener("scroll", () => {
  scrollTop();
});


const App = () => {

  const route = useLocation();

  return (
    <div className='layout'>
      <Topbar />
      {route.pathname.includes("/page") && < Header />}
      <InnerPages />
      <Footer />
      <Bottombar />

      <div className="go-top" id='goTop'>
        <NavLink to="" className="btn btn-primary scroll-to-top">
          <img src={arrowupIcon} alt="" />
        </NavLink>
      </div>

      <div className="chat">
        <NavLink to="" className="stretched-link">
          <img src={chat} alt="" />
        </NavLink>
      </div>
    </div>
  );
}

export default App;
