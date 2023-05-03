import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../FirebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

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
    console.log(data);
    // console.log(`se agregaron al carrito ${cantidad} unidad/es del producto ${product.title}`)
  };

  return (
    <div>
      <ItemDetail product={product} onAdd={onAdd} />
    </div>
  );
};
