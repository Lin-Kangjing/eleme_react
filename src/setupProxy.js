/*
 * @Description: 开发的时候本地代理http请求 ,注意：文件名不能修改！！cra 会按照 src/setupProxy.js 这个路径解析）
 * @FilePath: \eleme_react\src\setupProxy.js
 * @Date: 2021-10-19 09:31:29
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-11-03 11:26:19
 * @author: Lin_kangjing
 */
const {
  createProxyMiddleware
} = require('http-proxy-middleware');
module.exports = function (app) {
  app.use('/api', createProxyMiddleware({
    target: 'http://119.45.129.219:8088/',
    changeOrigin: true
  }));
}