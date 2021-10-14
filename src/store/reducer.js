/*
 * @Description:  
 * @FilePath: \eleme_react\src\store\reducer.js
 * @Date: 2021-10-14 15:37:10
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-10-14 15:37:11
 * @author: Lin_kangjing
 */

// 合并reducer
import {combineReducers} from 'redux';
import commons from './commons/reducer';
const reducer = combineReducers({commons})
export default reducer
