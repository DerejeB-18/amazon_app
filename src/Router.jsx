import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// These paths match your exact folder structure in the screenshots:
import Landing from './Pages/Landing/Landing';
import Signup from './Pages/Auth/Signup';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';

// components - Matching your lowercase 'c' folder
import LayOut from './components/LayOut/LayOut';

function Routing() {
return (
    <Router>
    <Routes>
        <Route path="/" element={<LayOut><Landing /></LayOut>} />
        <Route path="/auth" element={<Signup />} />
        <Route path="/payments" element={<LayOut><Payment /></LayOut>} />
        <Route path="/orders" element={<LayOut><Orders /></LayOut>} />
        <Route path="/cart" element={<LayOut><Cart /></LayOut>} />
        <Route path="/category/:categoryName" element={<LayOut><Results /></LayOut>} />
        <Route path="/products/:productId" element={<LayOut><ProductDetail /></LayOut>} />
    </Routes>
    </Router>
);
}

export default Routing;