import React from 'react';
import classes from './Cart.module.css';
import LayOut from '../../components/LayOut/LayOut';

function Cart() {
  return (
    <LayOut>
      <section className={classes.cart_container}>
        <h1>Hello from Cart</h1>
      </section>
    </LayOut>
  );
}

export default Cart;