/* eslint-disable */
import React, { PureComponent } from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <h1>Columbia Website</h1>
        <h3>
          <a className="link">
            <Link to="/home"> Home</Link>
          </a>
          {/* &#11044;    */}
          &nbsp;&bull;&nbsp;
          <a className="link">
            <Link to="/about"> About</Link>
          </a>
          {/* &#11044;    */}
          &nbsp;&bull;&nbsp;
          <a className="link">
            <Link to="/my-canvas"> React-canvas-demo</Link>
          </a>
        </h3>
        <hr />
      </div>
    );
  }
}
