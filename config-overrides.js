/*
 * @Description: antd mobile
 * @FilePath: \eleme_react\config-overrides.js
 * @Date: 2021-10-29 09:18:03
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-10-29 09:19:18
 * @author: Lin_kangjing
 */
const {
  override,
  fixBabelImports
} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
);