/*
 * @Description: 页面入口
 * @FilePath: \eleme_react\src\App.js
 * @Date: 2021-10-14 15:22:20
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-11-13 20:05:15
 * @author: Lin_kangjing
 */
import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Home, Order, Mine, Find } from "./pages";
import AppFooter from "./components/AppFooter/index.jsx";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.replaceRouter();
  }
  componentDidUpdate() {
    this.replaceRouter();
  }
  // 路由重定向
  replaceRouter(props) {
    props = props || this.props;
    let { pathname } = props.location;
    let { replace } = props.history;
    if (pathname === "/find") {
      replace("/find/coin");
    } else if (pathname === "/") {
      replace("/home");
    }
  }
  // 选择底部的tab是否显示
  renderFooter() {
    // let {pathname} = this.props.location;
    // if(pathname==="/mine") return "";
    return <AppFooter />;
  }
  render() {
    const { navs } = this.props;
    console.log('-------app.jsx render')
    return (
      <div>
        {
          <Switch>
            {navs.map((item) => {
              return (
                <Route
                  key={item.id}
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                />
              );
            })}
          </Switch>
        }
        {this.renderFooter()}
      </div>
    );
  }
}
App.defaultProps = {
  navs: [
    {
      id: 1,
      path: "/Home",
      component: Home,
      exact: false,
    },
    {
      id: 2,
      path: "/Order",
      component: Order,
      exact: false,
    },
    {
      id: 3,
      path: "/Find",
      component: Find,
      exact: false,
    },
    {
      id: 4,
      path: "/mine",
      component: Mine,
      exact: false,
    },
  ],
};

export default withRouter(App);
