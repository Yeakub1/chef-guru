import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home/Home';
import Blog from './components/Home/Blog/Blog';
import Login from './components/User/Login/Login';
import Registerion from './components/User/Registerion/Registerion';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Registerion></Registerion>
      },
      {
        path: '/reg',
        element: <Login></Login>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
