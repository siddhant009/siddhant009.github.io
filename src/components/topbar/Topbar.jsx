import "./topbar.scss";    
import {Person, Mail} from "@material-ui/icons"; 

export default function Topbar({expand, collapse}) {
    return (
        <div className={"topbar " + (expand && "active")} id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Siddhant Angne</a>
                    <div className="itemContainer">
                        {/* <Person className="icon"/> */}
                        <span>+1 (669)247-8650</span>
                    </div>
                    <div className="itemContainer">
                        {/* <Mail className = "icon" /> */}
                        <span>angnesiddhant@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        {/* <Mail className = "icon" /> */}
                        <span><a href="https://www.linkedin.com/in/siddhant-angne-287350140/" target="_blank">LinkedIn</a></span>
                    </div>
                    <div className="itemContainer">
                        {/* <Mail className = "icon" /> */}
                        <span><a href="https://www.youtube.com/channel/UCb1R_WYZ4scj34NAjCA9XyQ" target="_blank">Youtube</a></span>
                    </div>
                    <div className="itemContainer">
                        {/* <Mail className = "icon" /> */}
                        <span><a href="https://www.instagram.com/siddhant_angne/" target="_blank">Instagram</a></span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>collapse(!expand)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
