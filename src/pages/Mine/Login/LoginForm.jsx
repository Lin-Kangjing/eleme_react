import React, { Component } from "react";
import CommonsGroup from "../../../modules/groug";
// import  GroupState  from "../../../../modules/group"
import { Toast } from "antd-mobile";
class LoginForm extends Component {
  constructor(props){
    super(props);
    this.username =null
    this.password = null
    this.state = {
      userPlaceholder:props.type==='phone'?'手机号：123':'请输入用户名',
      passwordPlaceholder:props.type==='phone'?'code：123':'密码：123'
    } 
  }
  static getDerivedStateFromProps(props){
    return {
      userPlaceholder:props.type==='phone'?'手机号：123':'请输入用户名',
      passwordPlaceholder:props.type==='phone'?'code：123':'密码：123'
    }
  }
  handleSubmit = (e) => {
    let login = this.props.login
    if(this.props.type==='phone'){
      login = this.props.loginPhone
    }
    login({
      username: this.username.value,
      password: this.password.value,
      success: (data) => {
        Toast.success(data, 1);
      },
      fail: (err) => {
        Toast.fail(`${err} 登录失败！`, 1, () => {
          this.password.value = "";
          this.password.focus();
        });
      },
    });
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            ref={(el) => (this.username = el)}
            type="text"
            placeholder={this.state.userPlaceholder}
          />
        </div>
        <div className="form-group">
          <input
            ref={(el) => (this.password = el)}
            type="text"
            placeholder={this.state.passwordPlaceholder}
          />
        </div>
        <button type="submit" className="login">
          登录
        </button>
      </form>
    );
  }
}
export default CommonsGroup(LoginForm);
// export default GroupState(LoginForm, {
//     reducer: "mine",
//     states: ["userInfo"]
// })
