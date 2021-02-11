import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import Car from "./cars";
import "./App.css";
// import NavBar from "./Components/navbar";
// import Registration from "./Components/registration_form";
// import Rentals from "./Components/rentals";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      search: "",
      sort: "",
      error: null,
    };
  }

  setSearch(search) {
    this.setState({
      search,
    });
  }

  setSort(sort) {
    this.setState({
      sort,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const baseURL = "http://localhost:8000/cars";
    const params = [];
    if (this.state.search) {
      params.push(`search=${this.state.search}`);
    }
    if (this.state.sort) {
      params.push(`sort=${this.state.sort}`);
    }
    const query = params.join("&");
    const url = `${baseURL}?${query}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        this.setState({
          cars: data,
          error: null,
        });
      })
      .catch((err) => {
        this.setState({
          error: "Sorry, could not get car at this time",
        });
      });
  }

  render() {
    const cars = this.state.cars.map((car, i) => {
      return <Car {...car} key={i} />;
    });

    return (
      <main className="App">
        <h1>Registered Cars</h1>
        <div className="search">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label htmlFor="search">Make: </label>
            <input
              type="text"
              id="search"
              name="search"
              value={this.state.search}
              onChange={(e) => this.setSearch(e.target.value)}
            />

            <label htmlFor="sort">Sort: </label>
            <select
              id="sort"
              name="sort"
              onChange={(e) => this.setSort(e.target.value)}
            >
              <option value="model">Model</option>
              <option value="year">Year</option>
              <option value="VIN">VIN</option>
            </select>
            <button type="submit">Search</button>
          </form>
          <div className="App_error">{this.state.error}</div>
        </div>
        {cars}
      </main>
    );
  }
}

export default App;
