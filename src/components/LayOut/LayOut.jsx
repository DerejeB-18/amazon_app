import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function LayOut({ children }) {
  return (
    <>
      {/* The Header will always sit at the top */}
      <Header />
      <Outlet />
      <Footer />
      {/* "children" represents whatever page you are currently on (e.g., Landing, Cart, Payment) */}
      {children}
    </>
  );
}

export default LayOut;