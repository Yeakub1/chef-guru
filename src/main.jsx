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
import ChefDetails from './components/Layout/ChefDetails';
import Chef from './components/Home/Chef/Chef';
import UserDetails from './components/Pages/UserDetails/UserDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/card/:id",
        element: <Chef></Chef>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Registerion></Registerion>,
      },
      {
        path: "/reg",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/news",
    element: <ChefDetails></ChefDetails>,
    children: [
      {
        path: ":id",
        element: <UserDetails></UserDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
