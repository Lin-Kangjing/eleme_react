/*
 * @Description: 
 * @FilePath: \eleme_react\src\store\commons\reducer.js
 * @Date: 2021-10-14 15:38:48
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-10-28 17:04:27
 * @author: Lin_kangjing
 */
// 分支reducer必须是一个纯函数
// 内部职能进行同步操作，新状态的地址与之前状态的地址如果不一样的话，才是认为返回新的状态（深拷贝）
import state from './state';

import {
  LOGIN,LOGOUT
} from './const';
import {
  fromJS
} from 'immutable';
const reducer = (prevState = fromJS(state), action) => {
  switch (action.type) {
    case LOGIN:
      return prevState.set("userInfo", action.userInfo)
    case LOGOUT:
      return prevState.set("userInfo", action.userInfo)
    default:
      return prevState
  }
}
export default reducer