import React, { Component } from "react";
// import { Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar.jsx";
// import Record from "./Record/Record";
// import Coin from "./Coin/Coin";
import {renderRoutes} from '@/router';
import "./Find.scss";
class Find extends Component {
  render() {
    return (
      <div className="find">
        <div className="top">
          <NavBar ></NavBar>
        </div>
        {renderRoutes(this.props.route.routes)}
        {/* <Route path="/find/coin" component={Coin} />
        <Route path="/find/record" component={Record} /> */}
      </div>
    );
  }
}
export default Find;
