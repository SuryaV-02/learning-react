import React, { Component } from "react";

// Functioal Component
function Semester(props) {

    const exam = (subject_name,event) => {
        alert(event.type + subject_name)
    }
    return <div>
        <h1>Your exams starts by {props.month}</h1>
        <button onClick={(event) => exam("POAI",event)}>Reduce pending days</button>
    </div>
}

export default Semester