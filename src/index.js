/*
 * @Description: 
 * @FilePath: \eleme_react\src\index.js
 * @Date: 2021-10-14 15:22:20
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-10-21 15:27:27
 * @author: Lin_kangjing
 */
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 引入通用样式
import "./stylesheets/main.scss";
// 使用rem.js
import "./modules/rem";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
