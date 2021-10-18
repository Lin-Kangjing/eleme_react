/*
 * @Description: 
 * @FilePath: \eleme_react\src\http\http.js
 * @Date: 2021-10-14 16:48:52
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-10-14 16:53:56
 * @author: Lin_kangjing
 */
import axios from './axios'
import Qs from 'qs'
// import { filterNull, toType } from '@/utils/util'

export function apiAxios (method, url, headers, params, setting) {
  // if (params) {
  //   params = filterNull(params)
  // }
  // if (headers) {
  //   headers = filterNull(headers)
  // }

  // 处理配置参数
  let config = {
    method: method,
    url: url,
    headers: headers,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    withCredentials: false
  }
  // 表单提交
  if (headers['Content-Type'] === 'multipart/form-data') {
    config.transformRequest = [
      data => {
        const formData = new FormData()
        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            if ( Array.isArray(data[key])) {
            // if (  toType(data[key]) === 'array') {
              for (const e of data[key]) {
                formData.append(key, e)
              }
            } else {
              formData.append(key, data[key])
            }
          }
        }
        return formData
      }
    ]
  } else if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    // 参数序列化提交
    config.transformRequest = [function (data) {
      data = Qs.stringify(data)
      return data
    }]
  }
  // 合并参数
  config = {
    ...config,
    ...setting
  }

  // 请求
  return axios(config)
}
// get
export function get (url, headers, params, setting) {
  // headers = headers || {}
  // headers['Content-Type'] = headers['Content-Type'] ? headers['Content-Type'] : 'application/x-www-form-urlencoded'
  return apiAxios('GET', url, headers, params, setting)
}
// post
export function post (url, headers, params, setting) {
  // headers = headers || {}
  // headers['Content-Type'] = headers['Content-Type'] ? headers['Content-Type'] : 'application/x-www-form-urlencoded'
  return apiAxios('POST', url, headers, params, setting)
}
// formData
export function formData (url, headers, params, setting) {
  headers = headers || {}
  headers['Content-Type'] = 'multipart/form-data'
  return apiAxios('POST', url, headers, params)
}

// 返回在vue模板中的调用接口
export default {
  // 如果想传的是json格式的数据，设置请求头为 application/json
  get,
  post,
  formData,
  axios: apiAxios
}
