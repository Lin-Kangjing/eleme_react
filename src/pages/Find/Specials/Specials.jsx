import React,{Component} from "react"
import "./Specials.scss"
class Specials extends Component{
    render(){
        console.log("specials",this.props.specials)
        return (
            <div>
                Specials
            </div>
        )
    }
}
export default Specials