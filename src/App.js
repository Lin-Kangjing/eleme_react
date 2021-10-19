/*
 * @Description: 页面入口
 * @FilePath: \eleme_react\src\App.js
 * @Date: 2021-10-14 15:22:20
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-10-19 17:18:04
 * @author: Lin_kangjing
 */
import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom';
import {Home,Order,Mine,Find} from './components/pages';
import './App.css';

class App extends Component {
  renderNavs(){
    let {navs} = this.props;
    return (
      <Switch>
        {
          navs.map(item=>{
            return (
              <Route key={item.id} path={item.path} component={item.component} exact={item.exact} />
            )
          })
        }
      </Switch>
    )
  }
  render(){
    return (
      <div>
        {this.renderNavs()}
      </div>
    )
  }
}
App.defaultProps = {
  navs:[
      { id: 1, path: "/Home", component: Home, exact: false },
      { id: 2, path: "/Order", component: Order, exact: false },
      { id: 3, path: "/Find", component: Find, exact: false},
      { id: 4, path: "/mine", component: Mine, exact: false }
  ]
}

export default App;
