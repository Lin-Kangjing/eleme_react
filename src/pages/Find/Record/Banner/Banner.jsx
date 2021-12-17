import React, { Component } from "react";
import { Carousel } from "antd-mobile";
import { get } from "../../../../http/index";
import "./Banner.scss";
class Banner extends Component {
  state = { infos: [] };
  componentDidMount() {
    this.getBannerInfo();
  }
  // 获取swiper数据
  getBannerInfo() {
    //获取列表数据
    get(
      "/react-ele/api/banners.json",
      null,
      {},
      { codeMessageShow: false }
    ).then((res) => {
      this.setState({ infos: res.data.Banners },()=>window.dispatchEvent(new Event('resize')));
    });
  }
  render() {
    return (
      <div className="carousel-wrapper">
        <Carousel
          autoplay={true}
          infinite
          dotStyle={{ borderRadius: 0, height: "2px", marginBottom: "7px" }}
          dotActiveStyle={{
            borderRadius: 0,
            height: "2px",
            marginBottom: "7px",
            backgroundColor: "#007aff",
          }}
        >
          {this.state.infos.map((item) => {
            return (
                <div key={item.src} className="carousel-item">
                    <img  src={item.src} alt="" />
                </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}
export default Banner;
