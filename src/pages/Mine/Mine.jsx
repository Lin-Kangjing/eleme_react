import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./Login/Login.jsx";
import User from "./User/User.jsx";
import CommonsGroup from '../../modules/groug/index';
import './Mine.scss'

class Mine extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Route path="/mine/login" component={Login} />
        <Route path="/mine/user" component={User} />
        Mine
      </div>
    );
  }
}
export default CommonsGroup(Mine);
