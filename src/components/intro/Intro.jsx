import "./intro.scss"     
import {init} from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
    
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor:true,
            backDelay:1500,
            backSpeed:80,
            strings:["Engineer", "Developer", "Analyst", "Data Engineer"],
        })
    }, [])
    return (
        <div className='intro' id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/myimage.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Welcome to my website! I'm</h2>
                    <h1>Siddhant Angne</h1>
                    <h3>
                    Software <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#skills">
                    <img src="assets/uparrow.png" alt="" />
                </a>
            </div>
        </div>
    )
}
