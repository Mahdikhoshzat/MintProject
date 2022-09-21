import React from "react";
import "./answer.css"

export default function Answer(props) {

    let val = props.value
    return (
        <button className="btn-ans" onClick={() => props.checkAnswer(val)}>{props.content}</button>
    )
}