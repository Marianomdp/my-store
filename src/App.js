import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={"Error, la ruta no existe"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
