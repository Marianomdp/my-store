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
    <Card sx={{ minWidth: 149, maxWidth: 150, Height: 330, margin: 1 }}>
      <CardMedia sx={{ height: 100 }} image={item.img} title="foto" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" color="primary">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="primary">
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: 100,
        }}
      >
        <Link to={`/ItemDetail/${item.id}`}>
          <Button variant="contained" size="small">
            Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
