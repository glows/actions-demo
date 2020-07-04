/* eslint-disable */
import React, { PureComponent } from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <div>Home pages</div>
        <a className="link">
          <Link to="/about"> About</Link>
        </a>
        <br/>
        <a className="link">
          <Link to="/my-canvas"> React-canvas-demo</Link>
        </a>
        
        
      </div>
    );
  }
}
