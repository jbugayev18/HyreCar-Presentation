import React, { useState } from "react";
import Car from "../cars";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

function Listings(props) {
  console.log(props);

  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const baseURL = "http://localhost:8000/cars";

    const params = [];
    if (search) {
      params.push(`search=${search}`);
    }
    if (sort) {
      params.push(`sort=${sort}`);
    }
    const query = params.join("&");
    const url = `${baseURL}?${query}`;

    fetch(url, {
      headers: {
        Authorization: "Bearer a0593bbc-6bec-11eb-9439-0242ac130002",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setCars(data);
        setError(null);
        // this.setState({
        //   cars: data,
        //   error: null,
        // });
      })
      .catch((err) => {
        setError("Sorry,could not get car at this time");
        // this.setState({
        //   error: "Sorry, could not get car at this time",
        // });
      });
  };

  // render() {
  const vehicles = cars.map((car, i) => {
    return <Car {...car} key={i} />;
  });

  const options = [
    { value: "model", label: "Model" },
    { value: "year", label: "Year" },
    { value: "VIN", label: "VIN" },
  ];

  return (
    <section className="Listings">
      <h1>Listings</h1>
      <div className="search">
        <form onSubmit={(e) => handleSubmit(e)}>
          <TextField
            id="search"
            label="Make"
            style={{ width: "150px", marginRight: "10px" }}
            name="search"
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <TextField
            id="outlined-select-car-specifications"
            style={{ width: "150px", marginRight: "10px" }}
            select
            label="Select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            helperText="Model, Year, VIN"
            variant="outlined"
            size="small"
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}></MenuItem>
            ))}
          </TextField>
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        </form>
        <div className="App_error">{error}</div>
      </div>
      {vehicles}
    </section>
  );
  // }
}

export default Listings;
