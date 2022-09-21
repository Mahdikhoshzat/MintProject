import React from "react";
import "./Question.css";

export default function Question(props) {


    return (
        <div className="question">
            {props.text}
        </div>
    )
}