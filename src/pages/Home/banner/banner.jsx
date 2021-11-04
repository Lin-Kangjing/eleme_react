import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import { Carousel } from "antd-mobile";
import { get } from "../../../http/index";
import "./banner.scss";
class Banner extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      infos: [],
    };
  }
  componentDidMount() {
    this.getBannerInfo();
  }
  // 获取swiper数据
  getBannerInfo() {
    //获取列表数据
    get("/ele/index/banners", null, {}).then((res) => {
      const info = res.data.data.object_list;
      let group = []
      info.forEach((e,index) => {
        const groupIndex =Math.floor((index)/10)
        if(!group[groupIndex]){
          group[groupIndex] = []
        }
        group[groupIndex].push(e)
      })
      this.setState({ infos: group });
    });
  }
  render() {
    console.log(123);
    return (
      <div className="home-banner btn_banners">
        <Carousel
          autoplay={false}
          infinite
          dotStyle={{'borderRadius': 0,height: '2px',marginBottom:'7px'}}
          dotActiveStyle={{'borderRadius': 0,height: '2px',marginBottom:'7px',backgroundColor:'#007aff'}}
        >
          {this.state.infos.map((group,index)=>{
            return (
              <div key={index} className="swiper-slide" style={{height:'50vw'}}>
                {group.map(item=>{
                  return (
                    <GroupItem key={item.id} {...item} ></GroupItem>
                  )
                })}
              </div>
            )
          })}
          
        </Carousel>
      </div>
    );
  }
}

function GroupItem (props) {
  return (
  <NavLink to="/eleme/all" className="swiper-item" key={props.id}>
    <div className="group-item">
      <p>
        <img src={props.img} alt="" />
      </p>
      <span className="title">{props.title}</span>
    </div>
  </NavLink>)
}

export default Banner;
