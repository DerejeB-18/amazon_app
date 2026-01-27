import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function LayOut({ children }) {
  return (
    <>
      {/* The Header will always sit at the top */}
      <Header />
      <Outlet />
      {/* "children" represents whatever page you are currently on (e.g., Landing, Cart, Payment) */}
      {children}
    </>
  );
}

export default LayOut;