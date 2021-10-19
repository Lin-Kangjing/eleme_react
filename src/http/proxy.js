/*
 * @Description: 开发的时候本地代理http请求
 * @FilePath: \eleme_react\src\http\proxy.js
 * @Date: 2021-10-19 09:31:29
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-10-19 09:36:33
 * @author: Lin_kangjing
 */
import createProxyMiddleware from 'http-proxy-middleware';
export default function proxy (app) {
  app.use(createProxyMiddleware('/ele', {
    target: 'http://119.45.129.219:8088/',
    secure: false,
    changeOrigin: true,
    // pathRewrite: {
    //   "^/ele": "/ele"
    // }
  }))
}