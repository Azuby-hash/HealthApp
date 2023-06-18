import "./Nest.css"

export default function Nest(props) {
    return(
        <>
            <div className="top_bar">
                <img src="logo.png" alt="" className="icon"/>
                <div className="button">
                    <span className="item">
                        <img src="icon_challenge.png" alt="" className="icon"/>
                        <div className="label">Challenge</div>
                    </span>
                    <span className="item">
                        <img src="icon_info.png" alt="" className="icon"/>
                        <div className="label">Infomation</div>
                    </span>
                    <span className="item">
                        <img src="icon_memo.png" alt="" className="icon"/>
                        <div className="label">Message</div>
                    </span>
                </div>
                <img src="icon_menu.png" alt="" className="menu"/>
            </div>

            {<props.component />}

            <div className="bottom_bar">
                
            </div>
        </>
    )
}