import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.min.js';

import App from './App';
import Home from './theme/Components/Home/Home';
import MyAppointments from './theme/Components/InnerPages/MyAppointments/MyAppointments';
import InnerPages from './theme/Components/InnerPages/InnerPages';
import Data from './theme/Components/InnerPages/Data/Data';
import NotFound from './theme/Components/NotFound/NotFound';


const root = ReactDOM.createRoot(
  document.getElementById("root")!
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='page' element={<InnerPages />}>
          <Route path='data' element={<Data />} />
          <Route path='myappointments' element={<MyAppointments />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
