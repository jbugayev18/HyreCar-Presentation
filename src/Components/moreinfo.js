import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(10),
    marginTop: theme.spacing(10),
    maxWidth: 500,
    height: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function MoreInfo(props) {
  const classes = useStyles();
  console.log(props);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={props.image} alt="car" src={props.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom component="p" variant="h1">
                  {props.make}
                  Car Make
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.make}
                  {props.model}
                  {props.year}
                  {props.color}
                  {props.Odometer}
                  {props.VIN}
                  Place all of the keys here
                </Typography>
                {/* <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography> */}
              </Grid>
              <Grid item>
                {/* <Typography variant="body2" style={{ cursor: "pointer" }}>
                  Remove
                </Typography> */}
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Rent Price: $70.00 per day
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
