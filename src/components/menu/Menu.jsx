import "./menu.scss"

export default function Menu({expand, collapse}) {
    return (
        <div className={"menu "+ (expand && "active")}>
            <ul>
                <li onClick={()=>collapse(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>collapse(false)}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={()=>collapse(false)}>
                    <a href="#work">Work</a>
                </li>
                {/* <li onClick={()=>collapse(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li> */}
                <li onClick={()=>collapse(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
