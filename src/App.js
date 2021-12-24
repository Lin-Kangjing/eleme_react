/*
 * @Description: 页面入口
 * @FilePath: \eleme_react\src\App.js
 * @Date: 2021-10-14 15:22:20
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-12-24 14:07:40
 * @author: Lin_kangjing
 */
import React, { Component } from "react";
// import { Route, Switch,Redirect, withRouter } from "react-router-dom";
import {routes,renderRoutes} from '@/router';
// import { Home, Order, Mine, Find } from "./pages";
import AppFooter from "./components/AppFooter/index.jsx";
import "./App.css";

class App extends Component {
  // 选择底部的tab是否显示
  renderFooter() {
    // let {pathname} = this.props.location;
    // if(pathname==="/mine") return "";
    return <AppFooter />;
  }
  render() {
    // const { navs } = this.props;
    console.log('-------app.jsx render')
    return (
      <div>
        {renderRoutes(routes)}
        {
          
          // <Switch>
          //   <Route exact path="/" render={() => <Redirect to="/home" />} />
          //   <Route exact path="/find" render={() => <Redirect to="/find/coin" />} />
          //   <Route path="/find/coin" exact={false} component={Find} >
          //     <Route exact={false} path="/find/specialsDetails" component={()=>import('@/pages/Find/SpecialsDetails/SpecialsDetails')}></Route>
          //   </Route>
          //   {navs.map((item) => {
          //     return (
          //       <Route
          //         key={item.id}
          //         path={item.path}
          //         component={item.component}
          //         exact={item.exact}
          //       />
          //     );
          //   })}
          // </Switch>
        }
        {this.renderFooter()}
      </div>
    );
  }
}
// App.defaultProps = {
//   navs: [
//     {
//       id: 1,
//       path: "/home",
//       component: Home,
//       exact: false,
//     },
//     {
//       id: 2,
//       path: "/order",
//       component: Order,
//       exact: false,
//     },
//     // {
//     //   id: 3,
//     //   path: "/find",
//     //   component: Find,
//     //   exact: false,
//     //   route:[{
//     //     id:'3-1',
//     //     path: "/order",
//     //     component: Order,
//     //     exact: false,
//     //   }]
//     // },
//     {
//       id: 4,
//       path: "/mine",
//       component: Mine,
//       exact: false,
//     },
//   ],
// };

export default App;
