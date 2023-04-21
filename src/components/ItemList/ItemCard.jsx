import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 150, margin: 1 }}>
      <CardMedia sx={{ height: 150 }} image={item.img} title="foto" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="primary">
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions style={{ height: 100 }}>
        <Link to={`/ItemDetail/${item.id}`}>
          <Button variant="contained" size="small">
            Agregar al carrito
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
