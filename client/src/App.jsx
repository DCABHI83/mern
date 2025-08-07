import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Applayout from "./components/Layout/Applayout";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Error from "./components/pages/Error";
import Logout from "./components/pages/Logout";
import AdminLayout from "./components/Layout/AdminLayout";
import AdminDashboard from "./components/pages/AdminDashboard";
import AdminUsers from "./components/pages/AdminUsers";
import AdminContacts from "./components/pages/AdminContacts";
import AdminServices from "./components/pages/AdminServices";
import Edit from "./components/pages/Edit";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      errorElement:<Error/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/services",
          element:<Services/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/signup",
          element:<SignUp/>
        },
        {
          path:"/logout",
          element:<Logout/>
        },
       
        {
          path:"/admin",
          element:<AdminLayout/>,
          children:[
            {
            index:true,
              element:<AdminDashboard/>
            },
            {
              path:"users",
              element:<AdminUsers/>
            },
            {
              path:"contacts",
              element:<AdminContacts/>
            },
            {
              path:"services",
              element:<AdminServices/>
            },
            {
              path:"update/:id",
              element:<Edit/>
            }
          ]
        }
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
