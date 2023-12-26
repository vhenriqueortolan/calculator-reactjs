import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MathContextProvider } from './context/MathContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MathContextProvider> <App /></MathContextProvider>
);
