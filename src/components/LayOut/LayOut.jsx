import React from 'react';
import Header from '../Header/Header';

function LayOut({ children }) {
  return (
    <div>
      {/* The Header will always sit at the top */}
      <Header />
      
      {/* "children" represents whatever page you are currently on (e.g., Landing, Cart, Payment) */}
      {children}
    </div>
  );
}

export default LayOut;