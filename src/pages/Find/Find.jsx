import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar.jsx";
import Record from "./Record/Record";
import Coin from "./Coin/Coin";
import "./Find.scss";
class Find extends Component {
  // nav切换
  navBarClick() {}
  render() {
    return (
      <div className="find">
        <div className="top">
          <NavBar navClick={() => this.navBarClick()}></NavBar>
        </div>
        <Route path="/find/coin" component={Coin} />
        <Route path="/find/record" component={Record} />
      </div>
    );
  }
}
export default Find;
