import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import "./agenda.css";
import animationData from "../../assets/mic.json";

const section2 = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == "agenda-left")
            entry.target.classList.add("agendaScrollAnimateLeft");
          if (entry.target.id == "agenda-right")
            entry.target.classList.add("agendaScrollAnimateRight");
        }
      });
    };

    const options = {
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(callback, options);
    const divs = document.querySelectorAll(
      ".about-vision-title,.about-vision-description,.about-mission-title,.about-mission-description"
    );
    divs.forEach((div) => observer.observe(div));
  });

  const ref = useRef();
  return (
    <React.Fragment>
      <div className="section2">
        <div className="agenda" id="agenda">
          <div className="title2">
            <img src="/images/rrr.webp" alt="arrow-logo" />
            <h1 className="title-name">Agenda</h1>
          </div>
          <div className="agenda-text">
            <div className="agenda-lottie-animation">
              <Lottie
                animationData={animationData}
                lottieRef={ref}
                style={{
                  width: "40vw",
                  height: "50vh",
                  scale: "1.3",
                  // background: "red",
                }}
                loop={false}
                onMouseEnter={() => {
                  ref.current.stop();
                  ref.current.setSpeed(0.5);
                  ref.current.play();
                }}
                onMouseLeave={() => ref.current.goToAndStop(1000)}
              />
            </div>
            <div className="agenda-des">
              A make-a-thon is an event where individuals or teams converge to
              collaboratively tackle specific hardware challenges within a
              defined timeframe, typically spanning from a few hours to a couple
              of days. It serves as an excellent platform for programmers,
              designers, entrepreneurs, and other innovative minds to exhibit
              their skills, creativity, and problem-solving prowess..
            </div>
          </div>
        </div>
        <div className="parent-vision">
          <div className="vision">
            <div className="about-vision-title " id="agenda-left">
              <img
                src="/images/vision.webp"
                alt="vision-image"
                width="300px"
                className="about-vision-image"
              />
              Vision
            </div>
            <div className="about-vision-description" id="agenda-right">
              Empowering Innovators to Redefine Hardware Innovation. Our
              makeathon envisages a world where inventive minds converge to
              tackle pressing hardware challenges, crafting solutions that push
              the boundaries of what's possible. Through dynamic collaboration,
              cutting-edge technology, and unwavering determination, we ignite a
              spark that fuels real change in the hardware industry. Join us to
              make a difference, hacking towards a future where innovation knows
              no bounds, leaving an indelible mark on the landscape of hardware
              evolution.
            </div>
          </div>
          <div className="mission">
            <div className="about-mission-title" id="agenda-right">
              <img
                src="/images/target.webp"
                alt="mission-image"
                width={"250px"}
                className="about-mission-image"
              />
              Mission
            </div>
            <div className="about-mission-description" id="agenda-left">
              Our mission at the Makeathon is to foster a vibrant community of
              hardware enthusiasts, makers, and innovators, providing them with
              a collaborative platform to unleash their creativity and technical
              expertise. We aim to cultivate an environment where participants
              can learn, experiment, and innovate together, pushing the
              boundaries of hardware technology. Through hands-on learning and
              entrepreneurship, we empower individuals from diverse backgrounds
              to tackle real-world challenges and contribute to the advancement
              of technology. By sparking innovation and driving meaningful
              change, we aspire to leave a lasting impact on the landscape of
              hardware development, shaping a future defined by creativity,
              ingenuity, and collaboration. Join us in this exciting journey!
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default section2;
