// axios配置
export const axiosConfig = {
  baseURL: process.env.VUE_APP_API_BASE_URL, // api base_url
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
  codeMessageShow: true // 是否开启code不为0时的信息提示
}
// 判断请求成功的字段
export const STATUS_CODE = 'code'

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
