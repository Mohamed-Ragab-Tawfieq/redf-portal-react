import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Header from './theme/Components/Header/Header';

import 'bootstrap/dist/js/bootstrap.min.js';


const root = ReactDOM.createRoot(
  document.getElementById("root")!
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Header />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
