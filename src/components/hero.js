import React from "react";
import { useState, useEffect } from "react";
import TrackVisibility from "react-on-screen";
import "animate.css";
import Astronaut from "../assets/astronaut.svg";
import { RiArrowRightSLine } from "react-icons/ri";
import "./hero.css";
import space from "../assets/space.svg";

export default function Hero({ menuActive, toggleMenu }) {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Web Developer",
    "Front End Developer",
    "Node Developer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <div id="about">
    
      <div
        className="hero p-8 md:pl-32 flex flex-col md:grid md:grid-cols-3 h-screen bg-cover bg-center bg-no-repeat items-center"
        style={{ backgroundImage: `url(${space})` }}
      >
      { !menuActive &&  <div
          className={`hero-items md:col-span-2`}
          isVisible={!menuActive}
        >
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <span className="font-bold mb-5 px-1.5 py-2 text-xl md:text-2xl tracking-widest text-white bg-gradient-to-r from-violet-500 to-fuchsia-500">
                  Welcome to my Portfolio
                </span>
                <h1 className="mt-5 text-6xl tracking-widest text-white font-bold">
                  {`Hi! I'm Abhishek. I'm a `}{" "}
                  <span
                    className="txt-rotate"
                    dataPeriod="1000"
                    data-rotate='[ "Website Developer", "Front End Developer", "Nodejs Developer" ]'
                  >
                    <span className="">{text}</span>
                  </span>
                </h1>
                <p className="text-lg text-white tracking-widest">
                  Hi, I'm a javascript developer. I follow good coding practices
                  with naming and convention as much as possible. I like to make
                  sure that code both works and is readable and maintainable.
                </p>
                <a href="#contact" className="text-white text-xl font-bold">
                  Hire Me
                  <RiArrowRightSLine className="inline" size={24} />
                </a>
              </div>
            )}
          </TrackVisibility>
        </div>}
        { !menuActive &&  <div className="hero-items md:col-span-1">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__zoomIn" : ""}
              >
                <img
                  className="hero-image"
                  src={Astronaut}
                  alt="astronaut image"
                  style={{
                    height: "clamp(4rem, 40rem, 15rem)",
                  }}
                />
              </div>
            )}
          </TrackVisibility>
        </div>}
      </div>
    </div>
  );
}
