import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home Page</h1>, // Temporary placeholder
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
