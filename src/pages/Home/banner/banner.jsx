import React, { PureComponent } from "react";
import { get } from "../../../http/index";
import "./banner.scss";
class Banner extends PureComponent {
  componentDidMount() {
    console.log(1231);
    this.getBannerInfo();
  }
  getBannerInfo() {
    //获取列表数据
    get(
      "/ele/index/banners",
      null,
      {}
    ).then((res) => {
      const info = res.data.data.object_list;
      console.log(info);
    });
  }
  render() {
    return (
      <div className="home-banner swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img width="100%" src="" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
