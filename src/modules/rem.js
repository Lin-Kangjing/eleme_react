/*
 * @Description: 设置根节点的fontsize 大小，定义rem的大小
 * @FilePath: \eleme_react\src\modules\rem.js
 * @Date: 2021-10-19 09:40:35
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-10-29 10:14:49
 * @author: Lin_kangjing
 */
(function(){
  let doc=document.documentElement;//减少dom操作
  function resize(){
      //获取dom文档宽
      let clientWidth= window.innerWidth || doc.getBoundingClientRect().width ;
      doc.style.fontSize= clientWidth/375*100 + 'px';
  }
  //检测屏幕尺寸变化同步font-size，如横竖屏切换时触发
      window.onresize = function(){
          resize()
      };
  //页面初始化时触发
      resize()
})();
