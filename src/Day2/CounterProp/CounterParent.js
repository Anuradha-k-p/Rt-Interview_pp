import { Component } from "react";
import CounterChild from "./CounterChild";

class ParentCounter extends Component {
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    render(){
        return(
            <>
            <CounterChild value= {this.state.count}/>
            
            </>
        )
    }
}
export default ParentCounter;