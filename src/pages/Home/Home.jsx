import React, { Component } from 'react'
import Banner from './banner/banner';
// import AppFooter from '../components/AppFooter/index.jsx';

class Home extends Component{
  render(){
      return(
          <div>Home
              <Banner></Banner>
              {/* <AppFooter></AppFooter> */}
          </div>
      )
  }
}
export default Home