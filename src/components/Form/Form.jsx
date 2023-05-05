import React, { useState } from "react";
import styles from "./Form.module.css";
import { Typography } from "@mui/material";

const Form = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const envioDeFormulario = (evento) => {
    evento.preventDefault();
    // LOGIN

    console.log(userData);
  };

  return (
    <div className={styles.formulario}>
      <Typography variant="h3">CONTACTO</Typography>

      <form onSubmit={envioDeFormulario}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            placeholder="Ingresa tu nombre"
            name="nombre"
            value={userData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            placeholder="Ingresa tu apellido"
            name="apellido"
            value={userData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            placeholder="Ingresa tu teléfono"
            name="telefono"
            value={userData.telefono}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa tu correo electrónico"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="emailConfirm">Confirmar correo electrónico:</label>
          <input
            type="email"
            id="emailConfirm"
            placeholder="Confirma tu correo electrónico"
            name="emailConfirm"
            value={userData.emailConfirm}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          disabled={
            !userData.nombre ||
            !userData.apellido ||
            !userData.email ||
            !userData.emailConfirm
          }
        >
          Enviar
        </button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default Form;
