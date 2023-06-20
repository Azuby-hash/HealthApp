import { useEffect, useRef } from "react";
import "./Column.css"
import { Link } from "react-router-dom";

export default function Column() {
    return(
        <>
            <div className="column_stackA">
                
            </div>
            <div className="column_stackB">
                
            </div>
            <div className="column_stackC">
                <Link to="/" className="button">
                    <div className="label">Button</div>
                </Link>
            </div>
        </>
    )
}