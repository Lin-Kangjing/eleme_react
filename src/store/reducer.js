/*
 * @Description:  
 * @FilePath: \eleme_react\src\store\reducer.js
 * @Date: 2021-10-14 15:37:10
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-10-27 14:23:02
 * @author: Lin_kangjing
 */

// 合并reducer
// import {combineReducers} from 'redux';
import {combineReducers} from "redux-immutable"
import commons from './commons/reducer';
const reducer = combineReducers({commons})
export default reducer
