import styles from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";

import { db } from "../../FirebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection)
      .then((res) => {
        let categoriesResult = res.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setCategories(categoriesResult);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            style={{ maxWidth: "140px", margin: "0px" }}
            src="https://res.cloudinary.com/dmqsnjyfq/image/upload/v1682023806/ola-congelados-high-resolution-color-logo_ipatq1.png"
            alt="logo"
          />
        </Link>

        <div className={styles.categories}>
          {categories.map((category) => {
            return (
              <Link key={category.id} to={category.path}>
                {category.title}
              </Link>
            );
          })}
        </div>

        <CartWidget />
      </div>

      <Outlet />
    </div>
  );
};

export default NavBar;
