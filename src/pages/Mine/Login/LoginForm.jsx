import React, { Component } from "react";
import CommonsGroup from "../../../modules/groug";
// import  GroupState  from "../../../../modules/group"
import { Toast } from "antd-mobile";
class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:'',
      password:'',
      userPlaceholder:props.type==='phone'?'手机号：123':'请输入用户名',
      passwordPlaceholder:props.type==='phone'?'code：123':'密码：123'
    } 
  }
  static getDerivedStateFromProps(props,state){
    return {
      ...state,
      userPlaceholder:props.type==='phone'?'手机号：123':'请输入用户名',
      passwordPlaceholder:props.type==='phone'?'code：123':'密码：123'
    }
  }
  handleSubmit = (e) => {
    this.props.loginByText({
      phone: this.phone.value,
      code: this.code.value,
      success: (data) => {
        Toast.success(data, 1);
      },
      fail: (err) => {
        Toast.fail(err, 1, () => {
          this.code.value = "";
          this.code.focus();
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
            ref={(el) => (this.phone = el)}
            type="text"
            placeholder={this.state.userPlaceholder}
          />
        </div>
        <div className="form-group">
          <input
            ref={(el) => (this.code = el)}
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
