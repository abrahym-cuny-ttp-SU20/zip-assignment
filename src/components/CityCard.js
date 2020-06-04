import React, { Component } from "react";

class CityCard extends Component {
  render() {
    return (
      <div className="zipcode-card style=width: 18rem;">
          <div className="card">
        <div className="card-header">
          {this.props.city + ", " + this.props.state}
        </div>
        <div className="card-body">
          <ul>
            <li>State: {this.props.state}</li>
            <li>Location: {"("+this.props.lat + ", " + this.props.long+")"}</li>
            <li>Population (estimated): {this.props.population}</li>
            <li>Total Wages: {this.props.totalwages}</li>
          </ul>
        </div>
        </div>
      </div>
    );
  }
}
export default CityCard;
