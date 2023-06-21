import { useEffect, useRef } from "react";
import "./Column.css"
import { Link } from "react-router-dom";

export default function Column() {
    return(
        <>
            <div className="column_stackA">
                <div className="content"> 
                    <Recommneded title={"RECOMMENDED COLUMN"} content={"Content"}/>
                    <Recommneded title={"RECOMMENDED COLUMN"} content={"Content"}/>
                    <Recommneded title={"RECOMMENDED COLUMN"} content={"Content"}/>
                    <Recommneded title={"RECOMMENDED COLUMN"} content={"Content"}/>
                </div>
            </div>
            <div className="column_stackB">
                <div className="content"> 
                    <Posted img={"column_1.png"} date={"2021.05.17"} time={"23:25"} content={"This is news!"} hashtag={"#hashtag"}/>
                    <Posted img={"column_2.png"} date={"2021.05.17"} time={"23:25"} content={"This is news!"} hashtag={"#hashtag"}/>
                    <Posted img={"column_3.png"} date={"2021.05.17"} time={"23:25"} content={"This is news!"} hashtag={"#hashtag"}/>
                    <Posted img={"column_4.png"} date={"2021.05.17"} time={"23:25"} content={"This is news!"} hashtag={"#hashtag"}/>
                </div>
                <div className="content"> 
                    <Posted img={"column_5.png"} date={"2021.05.17"} time={"23:25"} content={"This is news!"} hashtag={"#hashtag"}/>
                    <Posted img={"column_6.png"} date={"2021.05.17"} time={"23:25"} content={"This is news!"} hashtag={"#hashtag"}/>
                    <Posted img={"column_7.png"} date={"2021.05.17"} time={"23:25"} content={"This is news!"} hashtag={"#hashtag"}/>
                    <Posted img={"column_8.png"} date={"2021.05.17"} time={"23:25"} content={"This is news!"} hashtag={"#hashtag"}/>
                </div>
            </div>
            <div className="column_stackC">
                <Link to="/" className="button">
                    <div className="label">Button</div>
                </Link>
            </div>
        </>
    )
}

function Recommneded(props) {
    return (
        <>
            <div className="rItem">
                <div className="title">{props.title}</div>
                <div className="spacing"></div>
                <div className="content">{props.content}</div>
            </div>
        </>
    )
}

function Posted(props) {
    return (
        <>
            <div className="rItem">
                <img src={props.img} alt="" className="img"/>
                <div className="time">{props.date} &nbsp;&nbsp; {props.time}</div>
                <div className="content">{props.content}</div>
                <div className="hashtag">{props.hashtag}</div>
            </div>
        </>
    )
}