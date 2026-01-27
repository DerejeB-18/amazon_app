import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Landing from "./components/Pages/Landing/Landing";
import Signup from "./components/Pages/Auth/Signup";
import Payment from "./components/Pages/Payment/Payment";
import Orders from "./components/Pages/Orders/Orders";
import Cart from "./components/Pages/Cart/Cart";
import Results from "./components/Pages/Results/Results";
import ProductDetail from "./components/Pages/ProductDetail/ProductDetail";

// Layout
import LayOut from "./components/LayOut/LayOut";

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Landing />} />
          <Route path="signup" element={<Signup />} />
          <Route path="payment" element={<Payment />} />
          <Route path="orders" element={<Orders />} />
          <Route path="cart" element={<Cart />} />
          <Route path="results" element={<Results />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
  );
};

export default Router;