import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { get } from "../../../http/index";
import "./Specials.scss";
class Specials extends Component {
  state = {
    specials: [],
  };
  componentDidMount() {
    this.getGoods();
  }
  // 获取商品数据
  getGoods() {
    //获取列表数据
    get("/react-ele/api/goods.json", null, {}, { codeMessageShow: false }).then(
      (res) => {
        this.setState({ specials:[...this.state.specials, ...res.data.Goods]});
      }
    );
  }
  render() {
    const { specials } = this.state;
    return (
      <div className="specials">
        <img
          className="banner-single-image"
          width="100%"
          src="https://yun.duiba.com.cn/images/201808/fh9iw1evwk.jpg?x-oss-process=image/format,webp"
          alt=""
        />
        <section className="bannerBox">
          <div className="mainShowcase">
            <img
              src="https://yun.duiba.com.cn/images/201812/sch8war88p.png"
              alt=""
            />
          </div>
          <div className="sideShowcase">
            <div className="topShowcase">
              <img
                src="https://yun.duiba.com.cn/images/201906/hhpc0nsoc6.jpeg"
                alt=""
              />
            </div>
            <div className="bottomShowcase">
              <img
                src="https://yun.duiba.com.cn/images/201808/iq43cwcj43.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
        <div className="floor">
          <div className="floorHeader">大家都在兑</div>
          <div className="floorItem">
            {specials.map((item, index) => {
              return (
                <div key={index} className="item">
                  <div className="theme-color">
                    <h3 className="itemTitle">{item.title}</h3>
                    <span className="itemCredits">
                      {item.price}
                      <span className="unitName">金币</span>
                    </span>
                    <span className="corner">抽奖</span>
                  </div>
                  <div className="imgWrap">
                    <NavLink to={"/find/specialsDetails/" + item.id}>
                      <img src={item.src} alt="" />
                    </NavLink>
                  </div>
                </div>
              );
            })}
            <div className="load item">
              <p onClick={()=>this.getGoods()} className="loadmore">
                点击加载更多
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Specials;
