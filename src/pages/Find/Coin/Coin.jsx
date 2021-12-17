import React,{Component} from "react"
import "./Coin.scss"
import Specials from "../Specials/Specials"
class Coin extends Component{
    render(){
        return(
            <div className="p-t-45">  
                <Specials />
            </div>
        )
    }
}
export default Coin