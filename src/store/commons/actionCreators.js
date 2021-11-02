/*
 * @Description: 
 * @FilePath: \eleme_react\src\store\commons\actionCreators.js
 * @Date: 2021-10-26 15:28:23
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-11-02 10:21:31
 * @author: Lin_kangjing
 */
import {LOGIN,LOGOUT} from './const';
const actionCreators = {
  login({username,password,success,fail}) {
    return dispatch => {
      console.log(password, typeof password);
      setTimeout(() => {
        if(password === '123'  && username){
          dispatch({
            type:LOGIN,
            userInfo:{username:username}
          })
          success(username)
        }else{
          fail(username)
        }
       
      })
    }
  },
  loginPhone({username,password,success,fail}) {
    return dispatch => {
      setTimeout(() => {
        if(password ==='123' && username === '123'  ){
          dispatch({
            type:LOGIN,
            userInfo:{username:username}
          })
          success(username)
        }else{
          fail(username)
        }
       
      })
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