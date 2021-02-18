import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import React from "react";

export default function Car(props) {
  return (
    <Card style={{ width: "70%", margin: "0 auto" }}>
      <CardActionArea>
        <CardMedia
          style={{ height: "250px" }}
          image={props.image}
          title={`${props.make} ${props.model}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="p">
            {props.make}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Let's take a luxurious ride in the {props.make} {props.model} Series
          </Typography>
        </CardContent>
      </CardActionArea>
      <Link to={`/moreinfo/${props.id}`}>More Info</Link>
    </Card>
  );
}
