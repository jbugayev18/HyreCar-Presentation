import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core";

import React from "react";

export default function Car(props) {
  const handleMoreInfo = (e) => {
    e.preventDefault();
    const baseURL = "http://localhost:8000/car/:id";

    fetch(baseURL, {
      headers: {
        Authorization: "Bearer a0593bbc-6bec-11eb-9439-0242ac130002",
      },
    });
    //When moreinfo is clicked, we get see the id of a specific car we clicked
  };

  return (
    <Card style={{ width: "70%", margin: "0 auto" }}>
      <CardActionArea>
        <CardMedia
          style={{ height: "250px" }}
          image={props.image}
          title={`${props.make} ${props.model}`}
        />
        <CardContent>
          <Typography gutterBottom cariant="h5" component="p">
            {props.make}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Let's take a luxurious ride in the {props.make} {props.model} Series
          </Typography>
        </CardContent>
      </CardActionArea>

      <Link
        component="button"
        variant="body2"
        onClick={() => {
          console.info("I'm a button.");
        }}
        size="small"
        color="primary"
      >
        Check Status
      </Link>

      <Link
        to={``}
        component="button"
        variant="body2"
        // onClick={() => {
        //   console.info("I'm a button.");
        // }}
        size="small"
        color="primary"
      >
        More Info
      </Link>
    </Card>
  );
}
