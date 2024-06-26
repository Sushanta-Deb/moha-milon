import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Orders from './Components/Orders/Orders';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes';
import Profile from './Components/Profile/Profile';
import Dashboard from './Components/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/orders",
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path: "/profile",
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
