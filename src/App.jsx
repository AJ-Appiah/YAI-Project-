import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landingPage/landingPage";
import AboutPage from "./pages/landingPage/aboutPage/aboutPage";
import HowItWorks from "./pages/landingPage/product/howItWorks";
import Features from "./pages/landingPage/product/features";
import CustomizationOptions from "./pages/landingPage/product/customizationOptions";
import PaymentMethods from "./pages/landingPage/shop/paymentMethods";
import BuyNow from "./pages/landingPage/shop/buyNow";
import BulkOrders from "./pages/landingPage/shop/bulkOrders";
import Contact from "./pages/landingPage/contact/contact";


const router = createBrowserRouter([
  { path: "/", element: <LandingPage/> },
  { path: "/about", element: <AboutPage/> }, 
  { path: "/how-it-works", element: <HowItWorks /> },
{ path: "/features", element: <Features /> },
{path: "/customization", element: <CustomizationOptions />},
{path: "/payment-methods", element: <PaymentMethods />},
{ path: "/buy-now", element: <BuyNow /> },
{ path: "bulk-orders", element: <BulkOrders /> },
{ path: "contact", element: <Contact /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
