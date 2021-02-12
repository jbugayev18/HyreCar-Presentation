import React from "react";

export default function Car(props) {
  return (
    <div className="car">
      <h2>{props.make}</h2>
      <div className="model">Model: {props.model}</div>
      <div className="year">Year of model: {props.year}</div>
      <div className="color">Color: {props.color}</div>
      <div className="Odometer"> Odometer: {props.Odometer}</div>
      <div className="VIN"> VIN: {props.VIN}</div>
      <img alt="car" src={props.image}></img>
    </div>
  );
}
