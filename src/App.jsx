import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landingPage/landingPage";
import AboutPage from "./pages/landingPage/aboutPage/aboutPage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage/> },
  { path: "/about", element: <AboutPage/> }, 
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
