import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from './router';
import './index.css'
import axios from 'axios';

/* axios.defaults.withCredentials = true; // Permite enviar cookies
axios.defaults.headers.common['Content-Type'] = 'application/json'; */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
