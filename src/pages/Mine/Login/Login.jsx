import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
// import LoginTextForm from './LoginTextForm';
import LoginForm from "./LoginForm";
import CommonsGroup from "../../../modules/groug";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }
  login() {
    //登录 改变userInfo这个状态
    this.props.login({
      username: "林康景",
      password: "",
      success(data) {
        console.log(data);
      },
      fail(err) {
        console.log(err);
      },
    });
  }
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.replace("/")}
          rightContent={[<Icon key="1" type="ellipsis" />]}
        >
          NavBar
        </NavBar>
        <div className="content">
          <img src="https://shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" alt = "logo"/>
          <LoginForm />
          <p className="change-type">账户密码登录</p>
        </div>
      </div>
    );
  }
}
export default CommonsGroup(Login);
