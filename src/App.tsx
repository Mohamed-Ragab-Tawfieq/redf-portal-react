import React from 'react';

import Topbar from './theme/Components/Topbar/Topbar';
import Home from './theme/Components/Home/Home';
import Footer from './theme/Components/Footer/Footer';
import Bottombar from './theme/Components/Bottombar/Bottombar';
import '../src/assets/scss/App.scss';

const App = () => {
  return (
    <div className='layout'>
      <Topbar />
      <Home />
      <Footer />
      <Bottombar />
    </div>
  );
}

export default App;
