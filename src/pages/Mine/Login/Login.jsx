import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
// import LoginTextForm from './LoginTextForm';
import LoginForm from "./LoginForm";
import CommonsGroup from "../../../modules/group";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      title:'账号登录',
      type:'user'
    };
  }
  // 登录
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
  // 登录方式切换
  changeLoginType(){
    this.setState({
      title:this.state.type==='user'?'短信快捷登录':'账户密码登录',
      type:this.state.type==='user'?'phone':'user',
    })
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
          {this.state.title}
        </NavBar>
        <div className="content">
          <img src="https://shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" alt = "logo"/>
          <LoginForm type={this.state.type} />
          <p className="change-type" onClick={(e)=>this.changeLoginType()} >{this.state.type==='user'?'短信快捷登录':'账户密码登录'} </p>
        </div>
      </div>
    );
  }
}
export default CommonsGroup(Login);
