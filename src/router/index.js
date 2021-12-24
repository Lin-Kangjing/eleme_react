/*
 * @Description: 
 * @FilePath: \eleme_react\src\router\index.js
 * @Date: 2021-12-24 11:32:22
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-12-24 14:31:42
 * @author: Lin_kangjing
 */

import React, { Suspense } from 'react'
import { matchPath, Router, Route, Switch, } from 'react-router-dom'
import routes from './config';
// 渲染路由
function renderRoutes (routes,extraProps={},switchProps={}) { 
  if(Object.prototype.toString.call(extraProps).slice(8,-1) !=='Object'){
    extraProps = {}
  }
  if(Object.prototype.toString.call(switchProps).slice(8,-1) !=='Object'){
    switchProps = {}
  }
  return routes?(<Suspense fallback={<div>页面加载中...</div>} >
    <Switch {...switchProps}>
      {routes.map((route,i)=>(
        <Route {...routes}
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props =>
            route.render ? (
                route.render({ ...props, ...extraProps, route: route })
            ) : (
                <route.component {...props} {...extraProps} route={route} />
            )
          }>
        </Route>)
      )}
    </Switch>
  </Suspense>):null
}
// 匹配路由
function matchRoutes(routes,pathname,branch=[]) {
  if(!Array.isArray(branch)){
    branch = []
  }
  routes.some(route=>{
    const match = route.path?matchPath(pathname,route):(branch.length?branch[branch.length-1].match: Router.computeRootMatch(pathname))
    if(match){
      branch.push({route,match})
    }
    if(route.routes){
      matchRoutes(route.routes,pathname,branch)
    }
    return match
  })
  return branch
}
export {routes,renderRoutes,matchRoutes}