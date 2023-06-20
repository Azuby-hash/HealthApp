import { useEffect, useRef } from "react";
import "./Record.css"
import { Link } from "react-router-dom";

export default function Record() {
    const chartRef = useRef(null)

    useEffect(() => {
        chartRef.current.width = window.innerWidth / 1
        chartRef.current.height = window.innerHeight / 1.5

        const ctx = chartRef.current.getContext("2d")
        ctx.font = "28px Comic Sans MS";
        ctx.fillStyle = "#ffffff"
        
        const step = (ctx.canvas.width - 300) / 5
        
        for (let i = 0; i < 6; i++) { 
            ctx.fillText(`${i + 1}`, 120 + i * step, ctx.canvas.height - 30);
            ctx.beginPath();
            ctx.lineWidth = 0.2;
            ctx.strokeStyle = "#ffffff";
            ctx.moveTo(120 + i * step + 7, 0);
            ctx.lineTo(120 + i * step + 7, ctx.canvas.height - 80);      
            ctx.stroke();
        }

        ctx.closePath()
        ctx.beginPath()
        
        const weight =  [
            85,
            85.5,
            86,
            87,
            83,
            82
        ]
        ctx.moveTo(127, (weight[0] - 80) * (ctx.canvas.height - 160) / 10 + 40);
        ctx.arc(127, (weight[0] - 80) * (ctx.canvas.height - 160) / 10 + 40, 3, 0, 2 * Math.PI, true);    
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#FFCC21";
        
        for (let i = 1; i < 6; i++) { 
            ctx.lineTo(120 + i * step + 7, (weight[i] - 80) * (ctx.canvas.height - 160) / 10 + 40);      
            ctx.arc(120 + i * step + 7, (weight[i] - 80) * (ctx.canvas.height - 160) / 10 + 40, 3, 0, 2 * Math.PI, true);      
        }

        ctx.stroke();
        ctx.closePath();

        const fat =  [
            21,
            21,
            22,
            22,
            21,
            20
        ]

        ctx.beginPath();
        ctx.moveTo(127, (fat[0] - 18) * (ctx.canvas.height - 160) / 6 + 40);
        ctx.arc(127, (fat[0] - 18) * (ctx.canvas.height - 160) / 6 + 40, 3, 0, 2 * Math.PI, true);    
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#8FE9D0";
        
        for (let i = 1; i < 6; i++) { 
            ctx.lineTo(120 + i * step + 7, (fat[i] - 18) * (ctx.canvas.height - 160) / 6 + 40);   
            ctx.arc(120 + i * step + 7, (fat[i] - 18) * (ctx.canvas.height - 160) / 6 + 40, 3, 0, 2 * Math.PI, true);     
        }

        ctx.stroke();

    }, [chartRef]);

    return(
        <>
            <div className="record_stackA">
                <div className="item">
                    <div className="content">
                        <div className="label">BODY RECORD</div>
                        <div className="descript"></div>
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <div className="label">MY EXERCISE</div>
                        <div className="descript"></div>
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <div className="label">MY DIARY</div>
                        <div className="descript"></div>
                    </div>
                </div>
            </div>
            <div className="record_stackB">
                <div className="content">
                    <canvas className="chart" ref={chartRef}></canvas>
                </div>
            </div>
            <div className="record_stackC">
                <div className="content">
                    <div className="label">
                        <div className="label1">MY <br /> EXERCISE</div>
                        <div className="label2">2021.05.21</div>
                    </div>
                    <div className="scroll">
                        <div className="vertical">
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                        </div>
                        <div className="vertical">
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                            <RecordItem calo={`${26}kcal`} title={"Title"} duration={`${10} min`} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="record_stackD">
                <div className="title">MY DIARY</div>
                <div className="content"> 
                    <Daily day={"2021.05.21"} time={"23:25"} title={"Run"} content={"Run 10km"} />
                    <Daily day={"2021.05.21"} time={"23:25"} title={"Run"} content={"Run 10km"} />
                    <Daily day={"2021.05.21"} time={"23:25"} title={"Run"} content={"Run 10km"} />
                    <Daily day={"2021.05.21"} time={"23:25"} title={"Run"} content={"Run 10km"} />
                </div>
                <div className="content"> 
                    <Daily day={"2021.05.21"} time={"23:25"} title={"Run"} content={"Run 10km"} />
                    <Daily day={"2021.05.21"} time={"23:25"} title={"Run"} content={"Run 10km"} />
                    <Daily day={"2021.05.21"} time={"23:25"} title={"Run"} content={"Run 10km"} />
                    <Daily day={"2021.05.21"} time={"23:25"} title={"Run"} content={"Run 10km"} />
                </div>
            </div>
            <div className="record_stackE">
                <Link to="/column" className="button">
                    <div className="label">Button</div>
                </Link>
            </div>
        </>
    )
}

function RecordItem(props) {
    return (
        <>
            <div className="rItem">
                <div className="content">
                    <div className="title">•&nbsp;&nbsp;&nbsp;{props.title}</div>
                    <div className="duration">{props.duration}</div>
                </div>
                <div className="calo">{props.calo}</div>
                <div className="spacing"></div>
            </div>
        </>
    )
}

function Daily(props) {
    return (
        <>
            <div className="rItem">
                <div className="day">{props.day}</div>
                <div className="time">{props.time}</div>
                <div className="title">{props.title}</div>
                <div className="content">{props.content}</div>
            </div>
        </>
    )
}