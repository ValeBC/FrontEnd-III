import React, { Component } from "react";
import data from "../data.json";

class Historia extends Component {
  render() {
    return (
      <>
        <h2 className="historia">{data[this.props.contador].historia}</h2>
      </>
    );
  }
}

export default Historia;
