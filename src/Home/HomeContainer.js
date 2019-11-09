import React, { Component } from "react";
import Home from "./Home";
import data from "./data";

export default class HomeContainer extends Component {
  render() {
    return <Home data={data} />;
  }
}
