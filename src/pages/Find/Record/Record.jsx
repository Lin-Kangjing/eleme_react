import React,{Component} from "react"
import "./Record.scss"
class Record extends Component{
    render(){
        console.log("Record",this.props.Record)
        return (
            <div>
                Record
            </div>
        )
    }
}
export default Record