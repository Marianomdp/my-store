import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      {cart.map((e) => (
        <h1>{e?.title}</h1>
      ))}
    </div>
  );
};

export default Cart;
