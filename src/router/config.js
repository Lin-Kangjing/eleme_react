/*
 * @Description: 
 * @FilePath: \eleme_react\src\router\config.js
 * @Date: 2021-12-17 16:15:38
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-12-17 16:42:50
 * @author: Lin_kangjing
 */
const routes = [{
    path: "/home",
    component: () => import("@/pages/Home/Home"),
    exact: false,
  },
  {
    path: "/order",
    component: () => import("@/pages/Order/Order"),
    exact: false,
  },
  {
    path: "/find",
    component: () => import("@/pages/Find/Find"),
    exact: false,
    route: [{
        path: "/find/coin",
        component: () => import("@/pages/Find/Coin/Coin"),
        exact: false,
      },
      {
        path: "/find/record",
        component: () => import("@/pages/Find/Record/Record"),
        exact: false,
      },
      {
        path: "/find/specialsDetails",
        component: () => import("@/pages/Find/SpecialsDetails/SpecialsDetails"),
        exact: false,
      }
    ]
  },
  {
    path: "/mine",
    component: () => import("@/pages/Mine/Mine"),
    exact: false,
  },
];
export default routes;