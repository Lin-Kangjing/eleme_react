/*
 * @Description: 设置根节点的fontsize 大小，定义rem的大小
 * @FilePath: \eleme_react\src\modules\rem.js
 * @Date: 2021-10-19 09:40:35
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-10-19 09:44:50
 * @author: Lin_kangjing
 */
document.documentElement.style.fontsize = document.documentElement.clientWidth/3.75+"px"
window.onsize = function(){
  document.documentElement.style.fontsize = document.documentElement.clientWidth/3.75+"px" 
}
