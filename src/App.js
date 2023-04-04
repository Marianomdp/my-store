import "./App.css";
import ItemList from "./components/ItemList/ItemList";
import NavBar from "./components/NavBar/NavBar";

function App() {
  let saludo = "BIENVENIDOS A OLA CONGELADOS";
  return (
    <div className="App">
      <NavBar />
      <ItemList saludo={saludo} />
    </div>
  );
}

export default App;
