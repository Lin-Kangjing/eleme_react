/*
 * @Description: 
 * @FilePath: \eleme_react\src\http\config.js
 * @Date: 2021-10-25 15:36:20
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-11-03 11:58:19
 * @author: Lin_kangjing
 */
// axios配置
export const axiosConfig = {
  baseURL: process.env.REACT_APP_BASE_URL, // api base_url
  // baseURL: '/ele', // api base_url
  timeout: 120 * 1000 // 请求超时时间
}
// axios 自定义配置
export const customConfig = {
  // 缓存配置
  cache: false, // 是否开启缓存
  cacheExpire: 1000 * 10, // 缓存过期时间
  cacheStorageExpire: 1000 * 60 * 5, // storage缓存过期时间
  cacheStorage: true, // 是否开启缓存保存在storage （只能在这里改
  cacheStorageKey: 'apiCache', // 缓存storage的key （只能在这里改

  cancelRequest: true, // 是否开启取消重复请求,
  loading: false, // 是否开启loading层效果,
  errorMessageShow: true, // 是否开启接口错误信息展示
  codeMessageShow: true, // 是否开启code不正确时的信息提示
  successCodeValue:'1', //code的值等于successCode,返回的结果才是正确的
  statusCode:'status'//code 的key 为statusCode
  
}

/**
* 生成每个请求唯一的键
* @param {*} config
* @returns string
*/
export function getPendingKey (config) {
  const {
    url,
    method,
    params,
    data
  } = config
  return [url, method, JSON.stringify(params), typeof data === 'object' ? JSON.stringify(data) : data].join('&')
}
