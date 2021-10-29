import React, { PureComponent } from "react";

import CommonsGroup from "../../../modules/groug";

class User extends PureComponent {
  logout() {
    this.props.logout();
  }
  render() {
    return (
      <div>
        <p><button onClick={()=> this.logout()}>退出</button></p>
        <p>用户名为：{this.props.userInfo && this.props.userInfo.username}</p>
      </div>
    );
  }
}
export default CommonsGroup(User) ;
