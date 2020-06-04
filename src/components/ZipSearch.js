import React, { Component } from "react";
import Proptypes from "prop-types";
import CityCard from "./CityCard";
import axios from "axios"

class ZipSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      zipcodes: [],
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  fetchZipData = (e) => {
      const url = `http://ctp-zip-api.herokuapp.com/zip/${this.state.value}`
    axios.get(url)
      .then((response) => {
        const data = response.data;
        this.setState({ zipcodes: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {  
    const zipcodeCards = () =>
      this.state.zipcodes.map((zipcode) => {
        return (
          <CityCard
            key={zipcode.RecordNumber}
            city={zipcode.City}
            state={zipcode.State}
            lat={zipcode.Lat}
            long={zipcode.Long}
            population={zipcode.EstimatedPopulation}
            totalwages={zipcode.TotalWages}
          />
        );
      });

    return (
      <>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => {
                this.fetchZipData();
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="zipcodes">{zipcodeCards()}</div>
      </>
    );
  }
}

ZipSearch.propTypes = {
  value: Proptypes.string,
  zipcodes: Proptypes.object,
};

export default ZipSearch;