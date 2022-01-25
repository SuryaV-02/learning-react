import React, { Component } from "react";

// Functioal Component
function Semester(props) {
    const exam = (subject_name,event) => {
        alert(event.type + subject_name)
    }
    return <div>
        {props.isBegin?<h2>Your exams has begin</h2>:
        <div><h1>Your exams starts by {props.month}</h1></div>}
        
    </div>
}

export default Semester