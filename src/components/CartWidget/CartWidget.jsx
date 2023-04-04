import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignContent: "center",
        margin: "14px",
      }}
    >
      <span>0</span>
      <ShoppingCartIcon />
    </div>
  );
};

export default CartWidget;
