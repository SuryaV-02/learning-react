import React, { Component } from "react";

// Class component
class Holidays extends Component {
    constructor() {
        super()
        this.state = {
            start_date: "20 Feb",
            end_date: "28 Feb",
            pending_days: 0 // change it to 8 to execute the else statement
        }
    }

    changePendingDate() {
        this.state.pending_days -= 1
        alert(this.state.pending_days)
    }

    render() {
        if (this.state.pending_days < 1) {
            return <div>
                <h4>Your holiday has ended.. Sed life vro</h4>
            </div>
        } else {
            return <div>
                <h4>The holiday has begun, you have {this.props.number} days,
                    Starting from {this.state.start_date} till {this.state.end_date}.
                    Pending {this.state.pending_days} are left</h4>
                <button onClick={() => this.changePendingDate()}>Reduce pending days</button>
            </div>
        }
    }
}

export default Holidays