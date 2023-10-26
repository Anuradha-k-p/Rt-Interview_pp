import { Component } from "react";

class CounterChild extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter : this.props.value
        }
    }
    render(){
        return(
            <>
            <h2>Props Data : {this.state.counter}</h2>
            <button onClick={()=> this.setState({counter : this.props.value + 1})}>increment</button>
            
            </>
        )
    }

}
export default CounterChild;