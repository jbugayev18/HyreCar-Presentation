import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";

export default function Car(props) {
  return (
    <div className="car">
      <Grid container spacing={6}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          item
          xs={12}
        >
          <Box
            bgcolor="primary.main"
            color="primary.contrastText"
            p={3}
            flexDirection="column"
            borderRadius={16}
          >
            <h2>{props.make}</h2>
            <div className="model">Model: {props.model}</div>
            <div className="year">Year of model: {props.year}</div>
            <div className="color">Color: {props.color}</div>
            <div className="Odometer"> Odometer: {props.Odometer}</div>
            <div className="VIN"> VIN: {props.VIN}</div>

            <Box p={3}>
              <img alt="cars" width="700" src={props.image}></img>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
