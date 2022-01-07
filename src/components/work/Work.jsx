import "./work.scss";
import { projectsList } from "../../data";
import { useState } from "react";

export default function Work() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0? currentSlide-1:2) : 
        setCurrentSlide(currentSlide<projectsList.length-1?currentSlide+1:0);
    }
    return (
        <div className="work" id="work">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
              { projectsList.map(d=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                        <div className="leftContainer">
                            <h2>{d.title}</h2>
                            <p>{d.desc}</p>
                            <span>Projects</span>
                        </div>
                        </div>
                        <div className="right"></div>
                    </div>
                    </div>
              ))  
}
            </div>
            <img src="assets/leftarrow.png" className="arrow left" alt="" srcset="" onClick={() => handleClick("left")}/>
            <img src="assets/rightarrow.png" className="arrow right" alt="" srcset="" onClick={() => handleClick()}/>
        </div>
    );
}
