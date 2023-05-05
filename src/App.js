import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { NavBar } from "./components/NavBar/NavBar";
import CartContainer from "./components/Cart/CartContainer";
import Form from "./components/Form/Form";
import CartContextProvider from "./context/CartContext";
import { FormCheckoutContainer } from "./components/FormCheckout/FormCheckoutContainter";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/form" element={<Form />} />
            <Route path="/checkout" element={<FormCheckoutContainer />} />
            <Route path="*" element={"Error, la ruta no existe"} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
