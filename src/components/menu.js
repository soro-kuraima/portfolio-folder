import React from "react";
import { document } from "browser-monads";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import anarchy from "../assets/anarchy.svg";
import './menu.css'

export default function Menu({ menuActive, toggleMenu }) {

  const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });

  
  return (
    <header className="h-10 mb-4">
      <button className="absolute top-4 left-4 z-[100]" onClick={toggleMenu}>
        {menuActive ? (
          <GiCrossMark className="fill-accent" size={32} />
        ) : (
          <GiHamburgerMenu className="fill-accent" size={32} />
        )}
      </button>
      <img
        src={anarchy}
        alt=""
        className="h-8 top-4 right-4 absolute z-[1000] bg-accent"
      />
        <div
          id="menu"
          isVisible={menuActive}
          className={`h-screen flex items-center ${menuActive ? "animate__animated animate__fadeIn": "animate__animated animate__fadeOut"} opacity-70 backdrop-blur-xl`}
        >
          <div
            id="menu-items"
            className="text-primary-content font-prata"
            style={{
              fontSize: "clamp(2rem, 7vw, 6rem)",
              marginLeft: "clamp(4rem, 20vw, 48rem)",
              zIndex: "2"
            }}
          >
            <a
              href="#about"
              className="menu-item block"
              style={{ padding: "clamp(0.25rem, 0.5vw, 1rem) 0" }}
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#skills"
              className="menu-item block"
              style={{ padding: "clamp(0.25rem, 0.5vw, 1rem) 0" }}
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="menu-item block"
              style={{ padding: "clamp(0.25rem, 0.5vw, 1rem) 0" }}
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="menu-item block"
              style={{ padding: "clamp(0.25rem, 0.5vw, 1rem) 0" }}
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
          <div id="menu-background-pattern">
          </div>
          <div id="menu-background-image"></div>
        </div>
    </header>
  );
}
