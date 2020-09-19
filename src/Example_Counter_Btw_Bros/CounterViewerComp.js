import React, {Component} from 'react';
import { connect } from "react-redux";

class CounterViewerComp extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <div>
                Counter: {this.props.data.counter}
            </div>
      
        )
    }
}

const mapStateToProps = (state) =>
    {
        return {data: state}
    }

export default connect(mapStateToProps)(CounterViewerComp)