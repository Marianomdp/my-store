import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const {
    cart,
    clearCart,
    deleteProductById,
    getTotalPrice,
    totalProducts,
    plusProductById,
  } = useContext(CartContext);

  let total = getTotalPrice();
  const navigate = useNavigate();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Seguro que quieres eliminar todo el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "eliminar",
      denyButtonText: `no eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Se limpio el carrito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("el carrito queda como estaba", "", "error");
      }
    });
  };

  return (
    <div>
      <Cart
        navigate={navigate}
        total={total}
        clearCartWithAlert={clearCartWithAlert}
        cart={cart}
        deleteProductById={deleteProductById}
        totalProducts={totalProducts}
        plusProductById={plusProductById}
      />
    </div>
  );
};

export default CartContainer;
