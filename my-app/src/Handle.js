import React from "react";
import { Link } from "react-router-dom";
import img1 from "./assets/nikat.png";
import "./Handle.css"

export default function Handle() {
    return (
        <div className="Hand">

            <h1>Welcome to MINT</h1>
            <img src={img1} alt="Nikat pic" />

            <div className='links'>
                <Link to='posts'>Visit our posts</Link>
                <Link to='chart'>See a line Chart about us!</Link>
                <Link to='quiz'>Test yourself in MINT</Link>
            </div>

        </div>
    );




}