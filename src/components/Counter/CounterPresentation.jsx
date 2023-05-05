import { Button } from "@mui/material";

const CounterPresentation = ({ sumar, restar, counter, onAdd }) => {
  return (
    <>
      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <Button variant="contained" onClick={restar}>
          Restar
        </Button>
        <h2>{counter}</h2>
        <Button variant="contained" onClick={sumar}>
          Sumar
        </Button>
        <Button variant="contained" onClick={() => onAdd(counter)}>
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};

export default CounterPresentation;
