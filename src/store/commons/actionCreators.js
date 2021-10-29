/*
 * @Description: 
 * @FilePath: \eleme_react\src\store\commons\actionCreators.js
 * @Date: 2021-10-26 15:28:23
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-10-28 17:03:35
 * @author: Lin_kangjing
 */
import {LOGIN,LOGOUT} from './const';
const actionCreators = {
  login({username,password,success,fail}) {
    return dispatch => {
      setTimeout(() => dispatch({
        type:LOGIN,
        userInfo:{username:username || '林康景'}
      }))
      success(username)
    }
  },
  logout() {
    return dispatch => {
      setTimeout(() => dispatch({
        type:LOGOUT,
        userinfo:null
      }))
    }
  }
}
export default actionCreators