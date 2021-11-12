/*
 * @Description:
 * @FilePath: \eleme_react\src\pages\Find\NavBar\NavBar.jsx
 * @Date: 2021-11-05 10:52:58
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-11-11 10:27:16
 * @author: Lin_kangjing
 */
import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import GroupState from "../../../../modules/group"
import "./NavBar.scss";
class NavBar extends PureComponent {
  render() {
    const { pathname } = this.props.location;
    const { navs } = this.props;
    return (
      <div className="headerBox">
        {navs.map((item) => {
          return (
            <NavLink key={item.id} to={item.path} exact={item.exact}>
              <div
                className={['headerItem',item.name,item.path===pathname?'active':''].join(' ') }
                onClick={this.handleClick}
              >
                <i className={"fa fa-" + item.icon}> </i>{" "}
                <span> {item.title} </span>{" "}
              </div>{" "}
            </NavLink>
          );
        })}{" "}
      </div>
    );
  }
}
NavBar.defaultProps = {
  navs: [
    {
      id: 1,
      path: "/find/coin",
      icon: "usd",
      exact: false,
      title: "金币",
      name: "coin",
    },
    {
      id: 2,
      path: "/find/record",
      icon: "file-o",
      exact: false,
      title: "兑换记录",
      name: "record",
    },
  ],
};
export default withRouter(NavBar);
// export default withRouter(GroupState(NavBar,{
//     reducer:"find",
//     states:["activeItem"]
// }))
