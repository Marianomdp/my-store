import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import CounterContainer from "../Counter/CounterContainer";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
  return (
    <div className={styles.container}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6} className={styles.imageContainer}>
          <img className={styles.image} src={product.img} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={styles.detailsContainer}>
            <Typography variant="h2" className={styles.title}>
              <span className={styles.titleText}></span> {product.title}
            </Typography>
            <Typography variant="h3" className={styles.description}>
              <span className={styles.titleText}></span> {product.description}
            </Typography>
            <Typography variant="h2" className={styles.price}>
              <span className={styles.titleText}></span> ${product.price}
              .-
            </Typography>
          </div>
        </Grid>
      </Grid>
      <CounterContainer
        stock={product.stock}
        onAdd={onAdd}
        initial={cantidadTotal}
      />
      <div className={styles.buttonContainer}>
        <Link to="/">
          <Button variant="contained">Seguir comprando</Button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
