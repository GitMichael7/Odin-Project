import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shopping from './pages/shopping.jsx';
import ShoppingCart from './pages/shoppingCart.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/shopping",
    element: <Shopping />,
  },
  {
    path: "/shoppingCart",
    element: <ShoppingCart />,
  },
  {
    path: "/home",
    element: <App />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);