import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  let cartLocal = JSON.parse(localStorage.getItem("cart"));
  let existInLocalStorage = cartLocal || [];

  const [cart, setCart] = useState(existInLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const isInCart = (id) => {
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };

  const agregarAlCarrito = (producto) => {
    let existe = isInCart(producto.id);
    if (existe) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === producto.id) {
          return {
            ...elemento,
            quantity: producto.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, producto]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteProductById = (id) => {
    const productIndex = cart.findIndex((elemento) => elemento.id === id);
    if (productIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[productIndex].quantity > 1) {
        updatedCart[productIndex].quantity -= 1;
      } else {
        updatedCart.splice(productIndex, 1);
      }
      setCart(updatedCart);
    }
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return total;
  };

  const getQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    return product?.quantity;
  };

  const totalProducts = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  const plusProductById = (id) => {
    const updatedCart = cart.map((elemento) => {
      if (elemento.id === id) {
        return {
          ...elemento,
          quantity: elemento.quantity + 1,
        };
      }
      return elemento;
    });
    setCart(updatedCart);
  };

  let data = {
    getTotalQuantity,
    cart,
    plusProductById,
    agregarAlCarrito,
    clearCart,
    deleteProductById,
    getTotalPrice,
    getQuantityById,
    totalProducts,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
