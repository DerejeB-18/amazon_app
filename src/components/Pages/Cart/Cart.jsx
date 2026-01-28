import React, { useContext } from 'react';
import classes from './Cart.module.css';
import { StateContext } from '../../../context/StateProvider';
import ProductCard from '../../Product/ProductCard';

function Cart() {
  const { state } = useContext(StateContext);
  const basket = state?.basket || [];

  return (
    <section className={classes.cart_container}>
      <h1>Your Shopping Cart</h1>

      {basket.length === 0 ? (
        <p className={classes.empty_cart}>
          Your Amazon Cart is empty.
        </p>
      ) : (
        basket.map((item) => (
          <ProductCard
            key={item.id}
            renderData={item}
            flex={true}
            renderDesc={true}
            renderAdd={false}
          />
        ))
      )}
    </section>
  );
}

export default Cart;