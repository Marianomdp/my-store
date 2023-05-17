import { Button } from "@mui/material";
import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  clearCartWithAlert,
  deleteProductById,
  total,
  totalProducts,
  plusProductById,
  navigate,
}) => {
  return (
    <div>
      <div className="cart-container">
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <h3>${item.price * item.quantity}.-</h3>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Button
                    variant="contained"
                    style={{
                      fontSize: "12px", // Reducir el tamaño de la fuente
                      padding: "4px 8px", // Ajustar el padding
                      borderRadius: "4px", // Aplicar bordes redondeados
                      color: "#102e44", // Cambiar el color del texto
                    }}
                    onClick={() => deleteProductById(item.id)}
                  >
                    -
                  </Button>
                  <h3 style={{ margin: "0 8px" }}>{item.quantity}</h3>
                  <Button
                    variant="contained"
                    style={{
                      fontSize: "12px", // Reducir el tamaño de la fuente
                      padding: "4px 8px", // Ajustar el padding
                      borderRadius: "4px", // Aplicar bordes redondeados
                      color: "#102e44", // Cambiar el color del texto
                    }}
                    onClick={() => plusProductById(item.id)}
                  >
                    +
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          <h2>Descripcion del carrito:</h2>
          <h3>Cantidad de productos: {totalProducts()}</h3>
          <h3>Total de productos: $ {total}</h3>
          <h3>Envio: $ 600 </h3>
          {cart.length > 0 ? (
            <div className="btn-cart">
              <Button variant="contained" onClick={() => navigate("/checkout")}>
                Terminar la compra
              </Button>
              <Button onClick={clearCartWithAlert} variant="contained">
                Vaciar carrito
              </Button>
            </div>
          ) : (
            <Link to="/">
              <Button variant="contained">Agrega productos</Button>
            </Link>
          )}

          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginTop: "20px",
              color: "black",
              textTransform: "uppercase",
              textAlign: "center",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            TOTAL ${total + 600}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
