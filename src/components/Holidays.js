import React, {Component} from "react";

// Class component
class Holidays extends Component{
    constructor(){
        super()
        this.state = {
            start_date : "20 Feb",
            end_date : "28 Feb",
            pending_days :8
        }
    }
    render(){
        return <h4>The holiday has begun, you have {this.props.number} days,
        Starting from {this.state.start_date} till {this.state.end_date}.
        Pending {this.state.pending_days} are left</h4>
    }
    
}

export default Holidays