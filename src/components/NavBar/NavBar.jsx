import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styles from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        style={{ maxWidth: "100%" }}
        src="https://res.cloudinary.com/dmqsnjyfq/image/upload/v1680577071/ola-congelados-high-resolution-color-logo_ipatq1.png"
        alt="logo"
      />
      <Box sx={{ "& button": { m: 2 } }}>
        <Button variant="outlined" size="small">
          INDUSTRIAS
        </Button>
        <Button variant="outlined" size="small">
          MAYORISTAS
        </Button>
        <Button variant="outlined" size="small">
          TIENDA
        </Button>
        <Button variant="outlined" size="small">
          CONTACTO
        </Button>
      </Box>
      <CartWidget />
    </div>
  );
};

export default NavBar;
