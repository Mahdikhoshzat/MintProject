import React from "react";
import "./Card.css";

export default function Card(props) {
    return (
        <div className="Card-class">
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    )
}