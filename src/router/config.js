/*
 * @Description:
 * @FilePath: \eleme_react\src\router\config.js
 * @Date: 2021-12-17 16:15:38
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-12-24 15:08:36
 * @author: Lin_kangjing
 */
import {  lazy } from 'react'
import { Redirect } from 'react-router-dom'
const routes = [
  { path: "/", exact: true, render: () => <Redirect to={"/home"} /> },
  {
    path: "/home",
    component: lazy(() => import("@/pages/Home/Home")),
    exact: true,
  },
  {
    path: "/find",
    component: lazy(() => import("@/pages/Find/Find")),
    exact: false,
    routes: [
      {
        path:"/find",
        exact:true,
        render:() => (
            <Redirect to={"/find/coin"}/>
        )
      },
      {
        path: "/find/coin",
        component: lazy(() => import("@/pages/Find/Coin/Coin")),
        exact: true,
      },
      {
        path: "/find/record",
        component: lazy(() => import("@/pages/Find/Record/Record")),
        exact: true,
      },
      {
        path: "/find/specialsDetails/:id",
        component: lazy(() =>
          import("@/pages/Find/Specials/SpecialsDetails/SpecialsDetails")),
        exact: true,
      },
    ],
  },
  {
    path: "/order",
    component: lazy(() => import("@/pages/Order/Order")),
    exact: false,
  },
  {
    path: "/mine",
    component: lazy(() => import("@/pages/Mine/Mine")),
    exact: false,
    routes: [
      {
        path:"/mine",
        exact:true,
        render:() => (
            <Redirect to={"/mine/login"}/>
        )
      },
      {
        path: "/mine/login",
        component: lazy(() => import("@/pages/Mine/Login/Login")),
        exact: true,
      },
      {
        path: "/mine/user",
        component: lazy(() => import("@/pages/Mine/User/User")),
        exact: true,
      },
    ],
  },
]
export default routes;
