/*
 * @Description: 组件要使用redux里面的数据，封装一个connect()
 * @FilePath: \eleme_react\src\modules\groug\index.js
 * @Date: 2021-10-26 15:17:26
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2021-10-27 14:30:41
 * @author: Lin_kangjing
 */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "../../store/commons/actionCreators";
export default connect(
  (state) =>{
    return {
      // userInfo:state.commons.get('userInfo'),
      userInfo:state.getIn(["commons","userInfo"])
    }
  } ,
  (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
  }
);
