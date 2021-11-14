import React,{Component} from "react"
import "./Coin.scss"
import Specials from "../Specials/Specials"
class Coin extends Component{
    render(){
        return(
            <div>
                <div className = "blank"></div>
                <Specials />
            </div>
        )
    }
}
export default Coin