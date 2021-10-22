import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

class AppFooter extends Component {
  renderFooter() {
    let { navs } = this.props;
    return navs.map((item) => {
      return (
        <NavLink key={item.id} to={item.path} exact={item.exact}>
          <i className={"fa fa-" + item.icon}></i>
          <span>{item.title}</span>
        </NavLink>
      );
    });
  }
  render() {
    return <div className="app-footer">{this.renderFooter()}</div>;
  }
}
AppFooter.defaultProps = {
  navs: [
    { id: 1, path: "/Home", icon: "home", exact: true, title: "首页" },
    { id: 2, path: "/find", icon: "podcast", exact: false, title: "发现" },
    { id: 3, path: "/order", icon: "book", exact: false, title: "订单" },
    { id: 4, path: "/mine", icon: "user", exact: false, title: "我的" },
  ],
};

export default AppFooter;