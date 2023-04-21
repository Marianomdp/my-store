import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <div
      style={{
        color: "rgb(56, 204, 204)",
        display: "flex",
        padding: "6px",
      }}
    >
      <span>0</span>
      <ShoppingCartIcon />
    </div>
  );
};

export default CartWidget;
