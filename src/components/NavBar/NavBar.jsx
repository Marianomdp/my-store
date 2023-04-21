import styles from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";

export const NavBar = () => {
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
          <Link to="/">Todas</Link>
          <Link to="/category/frutas">Frutas</Link>
          <Link to="/category/verduras">Verduras</Link>
          <Link to="http://www.olacongelados.com/tienda">Minoristas</Link>
          <Link to="http://www.olacongelados.com/contacto">Contacto</Link>
        </div>

        <CartWidget />
      </div>

      <Outlet />
    </div>
  );
};

export default NavBar;
