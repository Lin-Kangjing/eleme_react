/*
 * @Description: antd mobile
 * @FilePath: \eleme_react\config-overrides.js
 * @Date: 2021-10-29 09:18:03
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-12-17 16:34:48
 * @author: Lin_kangjing
 */
const {
  override,
  fixBabelImports,
  addWebpackAlias
} = require('customize-cra');
const path = require('path');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addWebpackAlias({
    '@':path.join(__dirname, './src'),
    '@@':path.join(__dirname, './src/components'),
    '@http':path.join(__dirname, './src/http'),
  })
);