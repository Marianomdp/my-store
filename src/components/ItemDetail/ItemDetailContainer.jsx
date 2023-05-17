import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../FirebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { agregarAlCarrito } = useContext(CartContext);

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) =>
        setProduct({
          ...res.data(),
          id: res.id,
        })
      )
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    agregarAlCarrito(data);
  };

  return (
    <div>
      <ItemDetail product={product} onAdd={onAdd} />
    </div>
  );
};
