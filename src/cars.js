//import { Grid } from "@material-ui/core";
//import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//import Fab from "@material-ui/core/Fab";
//import EditIcon from "@material-ui/icons/Edit";
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
          <Typography gutterBottom cariant="h5" component="p">
            {props.make}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Let's take a luxurious ride in the {props.make} {props.model} Series
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button size="small" color="primary">
        Check Status
      </Button>
      <Button size="small" color="primary">
        More Info
      </Button>
    </Card>

    // <div className="car">
    //   <Grid container spacing={6}>
    //     <Grid
    //       container
    //       direction="column"
    //       justify="center"
    //       alignItems="center"
    //       item
    //       xs={12}
    //     >
    //       <Box
    //         display="flex"
    //         bgcolor="primary.main"
    //         color="primary.contrastText"
    //         p={3}
    //         flexDirection="column"
    //         borderRadius={16}
    //         width="75%"
    //       >
    //         <h2>{props.make}</h2>
    //         <div className="model">Model: {props.model}</div>
    //         <div className="year">Year of model: {props.year}</div>
    //         <div className="color">Color: {props.color}</div>
    //         <div className="Odometer"> Odometer: {props.Odometer}</div>
    //         <div className="VIN"> VIN: {props.VIN}</div>

    //         <Box p={3}>
    //           <img
    //             alt="cars"
    //             display="flex"
    //             width="90%"
    //             src={props.image}
    //           ></img>
    //         </Box>
    //         <Fab color="inherit" aria-label="edit" size="large">
    //           <EditIcon />
    //         </Fab>
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </div>
  );
}
