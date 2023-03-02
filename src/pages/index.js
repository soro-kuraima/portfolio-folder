import * as React from "react";
import { useState } from "react";
import Menu from "../components/menu.js";
import Hero from "../components/hero.js";
import Skills from "../components/skills.js";
import Projects from "../components/projects.js";
import Contact from "../components/contact.js";
import Footer from "../components/footer.js";
import anarchy from "../assets/anarchy.svg"

const IndexPage = () => {
  const [menuActive, setMenuActive] = useState(false);

  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <main>
      <div className="App min-h-screen bg-neutral relative">
        <Menu menuActive={menuActive} toggleMenu={toggleMenu} />
        <Hero menuActive={menuActive} toggleMenu={toggleMenu} />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <>
  <title>Abhishek Sharma</title>
  <link rel="shortcut icon" href={anarchy} type="image/svg" />
</>
