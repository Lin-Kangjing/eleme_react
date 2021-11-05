import React, { PureComponent } from "react";
import { Route } from "react-router-dom";
import Login from "./Login/Login.jsx";
import User from "./User/User.jsx";
import CommonsGroup from "../../modules/group";
import "./Mine.scss";

class Mine extends PureComponent {
  componentDidMount() {  
    this.checkUserInfo();
  }
  componentDidUpdate(prevProps) {
    const { userInfo } = prevProps;
    if(userInfo !== this.props.userInfo || this.props.location.pathname==="/mine") {
      this.checkUserInfo();
    }
  }
  checkUserInfo() {
    let { userInfo, history } = this.props;
    if (userInfo) {
      //说明用户已经登录了
      history.replace("/mine/user");
    } else {
      history.replace("/mine/login");
    }
  }
  render() {
    return (
      <div>
        <Route path="/mine/login" component={Login} />
        <Route path="/mine/user" component={User} />
      </div>
    );
  }
}
export default CommonsGroup(Mine);
