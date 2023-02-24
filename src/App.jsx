import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from './pages/LoginPage';

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
