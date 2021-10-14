/*
 * @Description: 
 * @FilePath: \eleme_react\src\store\index.js
 * @Date: 2021-10-14 15:34:15
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-10-14 15:45:10
 * @author: Lin_kangjing
 */
import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
//这个中间件 action=>到达reducer之间的过程，内部函数可以实现异步操作，所以说增强了disptch功能
import thunk from 'redux-thunk';
//在项目actionCreators里面可以进行异步请求了
const store = createStore(reducer,applyMiddleware(thunk))
export default store
