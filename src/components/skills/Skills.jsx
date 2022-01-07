import { useEffect, useState } from "react";
import SkillsList from "../skillsList/SkillsList";
import "./skills.scss";     
import {softwareDevelopmentSkillsList, dbmsSkillsList, osSkillsList, UIDevelopmentSkillsList, toolsSkillsList}
from "../../data"

export default function Skills() {
    const[selected, setSelected] = useState("sd");
    const[data, setData] = useState([]);
    const list = [
        {
            id: "sd",
            title:"Software Development",
        },
        {
            id: "dbms",
            title:"Database Management Systems",
        },
        {
            id: "os",
            title:"Operating Systems",
        },
        {
            id: "uidev",
            title:"UI Development",
        },
        {
            id: "tools",
            title:"Tools",
        }
    ];

useEffect(()=> {

    switch(selected){
        case "sd":
            setData(softwareDevelopmentSkillsList );
            break;
        case "dbms":
            setData(dbmsSkillsList );
            break;
        case "os":
            setData(osSkillsList );
            break;
        case "uidev":
            setData(UIDevelopmentSkillsList );
            break;
        case "tools":
            setData(toolsSkillsList );
            break;
    }
},[selected])

    return (
        <div className='skills' id="skills">
             <a className="uparrow" href="#intro">
                    <img src="assets/uparrow.png" alt="" />
                </a>
            <h1>Skills</h1>
            <ul>
                {/* <li className="active">Software Development</li>
                <li>Database Management Systems</li>
                <li>Operating Systems</li>
                <li>UI Development</li>
                <li>Tools</li> */}
                {list.map((item)=>(
                    <SkillsList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected} 
                    id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(d=>(

                <div className="item">
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
            <a className="downarrow" href="#work">
                    <img src="assets/uparrow.png" alt="" />
            </a>
        </div>
    )
}
