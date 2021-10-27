/*
 * @Description: 
 * @FilePath: \eleme_react\src\store\commons\reducer.js
 * @Date: 2021-10-14 15:38:48
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-10-27 14:27:42
 * @author: Lin_kangjing
 */
// 分支reducer必须是一个纯函数
// 内部职能进行同步操作，新状态的地址与之前状态的地址如果不一样的话，才是认为返回新的状态（深拷贝）
import state from './state';
import {fromJS} from 'immutable';
const reducer = (prevState= fromJS(state),action)=>{
  switch(action.type){
    default:
      break;
  }
  return prevState
}
export default reducer
