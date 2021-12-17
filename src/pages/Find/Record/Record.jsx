import React,{Component} from "react"
import Specials from "../Specials/Specials"
import Banner from './Banner/Banner';
import "./Record.scss"
class Record extends Component{
    render(){
        console.log("Record",this.props.Record)
        return (
            <div className="p-t-45">
               <Banner />             
            <Specials />
            </div>
        )
    }
}
export default Record