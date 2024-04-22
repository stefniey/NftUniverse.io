// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from 'react';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root'); 
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
