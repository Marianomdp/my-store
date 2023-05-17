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
    <Card
      sx={{
        minWidth: 140,
        maxWidth: 140,
        margin: 1,
        borderInlineColor: "#102e44",
        backgroundColor: "#ebf3f8",
      }}
    >
      <CardMedia
        sx={{ height: 100, maxWidth: 100, margin: "auto" }}
        image={item.img}
        title="foto"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" color="#102e44">
          {item.title}
        </Typography>
        <Typography variant="body2" color="#102e44">
          {item.description}
        </Typography>
        <Typography variant="h6" color="#102e44">
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/ItemDetail/${item.id}`}>
          <Button variant="contained" size="small" style={{ marginBottom: 1 }}>
            Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
