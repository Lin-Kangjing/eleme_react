/*
 * @Description: 组件要使用redux里面的数据，封装一个connect()
 * @FilePath: \eleme_react\src\modules\group\index.js
 * @Date: 2021-10-26 15:17:26
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-11-04 11:24:35
 * @author: Lin_kangjing
 */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "../../store/commons/actionCreators";
export default connect(
  (state) =>{
    return {
      userInfo:state.getIn(["commons","userInfo"])
    }
  } ,
  (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
  }
);