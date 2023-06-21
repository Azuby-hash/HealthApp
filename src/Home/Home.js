import { useRef, useEffect } from "react"
import "./Home.css"
import { Link } from "react-router-dom";

export default function Home() {
    const chartRef = useRef(null)
    const progressRef = useRef(null)

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

    useEffect(() => {
        progressRef.current.width = window.innerHeight * 1.75
        progressRef.current.height = window.innerHeight

        const ctx = progressRef.current.getContext("2d")

        ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, ctx.canvas.height / 4, -0.5 * Math.PI, 1 * Math.PI, false);    
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#FFFFFF";
        
        ctx.stroke();

    }, [progressRef]);

    return(
        <>
            <div className="home_stackA">
                <img src="main_photo.png" alt="" className="photo"/>
                <canvas className="progress" ref={progressRef}></canvas>
                <div className="text">75%</div>
                <canvas className="chart" ref={chartRef}></canvas>
            </div>
            <div className="home_stackB">
                <img src="component_hex.png" alt="" className="item"/>
                <img src="component_hex-1.png" alt="" className="item"/>
                <img src="component_hex-2.png" alt="" className="item"/>
                <img src="component_hex-3.png" alt="" className="item"/>
            </div>
            <div className="home_stackC">
                <img src="menu_food.png" alt="" className="img"/>
            </div>
            <div className="home_stackD">
                <Link to="/record" className="button">
                    <div className="label">Button</div>
                </Link>
            </div>
        </>
    )
}