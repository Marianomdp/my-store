import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <Cart cart={cart} />
    </div>
  );
};

export default CartContainer;
