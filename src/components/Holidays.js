import React, {Component} from "react";


// Class component
class Holidays extends Component{
    render(){
        return <h2>The holiday has begun, you have {this.props.number} days</h2>
    }
}


export default Holidays