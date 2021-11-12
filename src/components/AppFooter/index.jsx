import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

class AppFooter extends PureComponent {
  render() {
    const { navs } = this.props;
    console.log("footer");
    return (
      <div className="app-footer">
        {navs.map((item) => (
          <NavLink key={item.id} to={item.path} exact={item.exact}>
            <i className={"fa fa-" + item.icon}></i>
            <span>{item.title}</span>
          </NavLink>
        ))}
      </div>
    );
  }
}
AppFooter.defaultProps = {
  navs: [
    { id: 1, path: "/home", icon: "home", exact: true, title: "首页" },
    { id: 2, path: "/find", icon: "podcast", exact: false, title: "发现" },
    { id: 3, path: "/order", icon: "book", exact: false, title: "订单" },
    { id: 4, path: "/mine", icon: "user", exact: false, title: "我的" },
  ],
};

export default AppFooter;
