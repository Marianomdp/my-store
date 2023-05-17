import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";

import { useFormik } from "formik";

import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { db } from "../../FirebaseConfig";

import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Box, Grid } from "@mui/material";

export const FormCheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = getTotalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, dataOrder).then((res) => setOrderId(res.id));

    cart.map((product) =>
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    );

    clearCart();
  };

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      phone: null,
    },
    onSubmit: checkoutFn,
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("este campo es obligatorio")
        .min(3, "el nombre debe tener al menos 3 caracteres")
        .max(10, "el nombre no puede superar los 10 caracteres"),
      email: Yup.string()
        .email("El campo debe ser un email")
        .required("este campo es obligatorio"),
      phone: Yup.number().required("este campo es obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <div className="checkout-container">
      {orderId ? (
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Box
              textAlign="center"
              p={4}
              border={1}
              borderRadius={4}
              borderColor="primary.main"
              component="h2"
              variant="h1"
            >
              ¡Gracias por tu compra! Nos pondremos en contacto a la brevedad
              para coordinar la entrega.
            </Box>
          </Grid>
        </Grid>
      ) : (
        <FormCheckout
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
        />
      )}
    </div>
  );
};
