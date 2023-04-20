import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from 'react'
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from './pages/LoginPage';
import ProjectCreateFormPage from "./pages/ProjectCreateFormPage";
import ProjectList from "./pages/ProjectList";
import SignUpPage from "./pages/SignUpPage";


const HeaderLayout = () => (
  <div>
    <Nav />
    <Outlet />
  </div>
);


const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <HomePage /> ,   
      },
      {
        path: "/project/:id",
        element: <ProjectPage /> ,
      },
      {
        path: "/login",
        element: <LoginPage /> ,
      },
      {
        path: "/createproject",
        element: <ProjectCreateFormPage /> ,
      },
      {
        path: "/projectlist",
        element: <ProjectList /> ,
      },
      {
        path: "/signup",
        element: <SignUpPage /> ,
      },
    ],
  },
]);

function App() {
 
  return (
    <div>
      <RouterProvider router={router} />
    </div>
 
  );
}

export default App;
