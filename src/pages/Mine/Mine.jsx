import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./Login/Login.jsx";
import User from "./User/User.jsx";
import './Mine.scss'

class Mine extends Component {
  render() {
    return (
      <div>
        <Route path="/mine/login" component={Login} />
        <Route path="/mine/user" component={User} />
        Mine
      </div>
    );
  }
}
export default Mine;
