import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter
  
} from "react-router-dom";
import AppHome from './Routes/Home/AppHome';
import { ScreenContextProvider } from './Contexts/screenContext';
import { DataContextProvider } from './Contexts/dataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScreenContextProvider>
        <DataContextProvider>
          <AppHome/>
        </DataContextProvider>
      </ScreenContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


