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
        backgroundColor: "white",
      }}
    >
      <CardMedia
        sx={{ height: 100, maxWidth: 100 }}
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
