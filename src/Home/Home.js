import "./Home.css"

export default function Home() {
    return(
        <>
            <div className="stackA">
                <img src="main_photo.png" alt="" className="photo"/>
                <div className="progress"></div>
                <div className="chart"></div>
            </div>
            <div className="stackB">
                <img src="component_hex.png" alt="" className="item"/>
                <img src="component_hex-1.png" alt="" className="item"/>
                <img src="component_hex-2.png" alt="" className="item"/>
                <img src="component_hex-3.png" alt="" className="item"/>
            </div>
            <div className="stackC">
                <img src="menu_food.png" alt="" className="img"/>
            </div>
            <div className="stackD">
                <div className="button">
                    <div className="label">Button</div>
                </div>
            </div>
        </>
    )
}