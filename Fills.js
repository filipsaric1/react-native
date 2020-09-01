import Fill from "./Fill.js";
import React, { Component } from "react";

export default class Fills extends Component {
  render() {
    return this.props.fills.map((fill) => <Fill fillObj={fill} />);
  }
}
