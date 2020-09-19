import React, {Component} from 'react';
import { connect } from "react-redux";

class CounterChangeComp extends Component
{
    constructor(props)
    {
        super(props)
    }

    increment = () =>
    {
        this.props.dispatch({type: "INCREMENT", payload: 1})
    }
    
    decrement = () =>
    {
        this.props.dispatch({type: "DECREMENT", payload: 1})
    }

    render()
    {
        return (
        <div>
            <input type = "button" value = "+" onClick = {this.increment} />
            <input type = "button" value = "-" onClick = {this.decrement} />
        </div>
      
        )
    }
}

export default connect()(CounterChangeComp)