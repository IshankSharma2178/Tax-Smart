import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import rootReducer from './reducer/index';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; 
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({  
  reducer:rootReducer,
})

root.render(
  <React.StrictMode>
  <Provider store={store} >
    <BrowserRouter>
        <App />
        <Toaster/>
    </BrowserRouter>
  </Provider>
  </React.StrictMode>
);

reportWebVitals();
