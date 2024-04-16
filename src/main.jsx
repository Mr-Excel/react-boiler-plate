import React from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import RouterProvider from "@/providers/RouteProvider.jsx"
import './index.css'
import store from '@/store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
      <Provider store={store}>
        <RouterProvider />
      </Provider>
  </React.Fragment>,
)
