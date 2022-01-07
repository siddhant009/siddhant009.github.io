import React from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main>
      <body>
        <div className="app">
           <Topbar expand={menuOpen} collapse={setMenuOpen}/>
           <Menu expand={menuOpen} collapse={setMenuOpen}/>
           <div className="sections">
             <Intro />
             <Skills />
             <Work />
             {/* <Testimonials /> */}
             <Contact />
           </div>
        </div>
      
      </body>
    </main>    
  );
}
