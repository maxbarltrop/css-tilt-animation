import React, { useEffect } from "react";
import logo from "./native-logo.svg";

export const TiltCard = () => {
  useEffect(() => {
    document.addEventListener("mousemove", (e) => handleMouseMove(e));
  });

  const handleMouseMove = (event) => {
    const target = document.getElementById("card");
    const relativeX = event.pageX / window.innerWidth;
    const relativeY = event.pageY / window.innerHeight;
    const yDegrees = relativeX * 40 - 20;
    const xDegrees = relativeY * -40 + 20;
    target.style.transform = `rotateX(${xDegrees}deg) rotateY(${yDegrees}deg)`;
    tilt(relativeX, relativeY);
  };

  const tilt = (relX, relY) => {
    const target = document.getElementById("card");
    const x = 1 - (relX - 0.5) * 800;
    const y = 1 - (relY - 0.5) * 800;
    target.style.setProperty("--tiltX", `${x}px`);
    target.style.setProperty("--tiltY", `${y}px`);
  };
  return (
    <div className="card-container">
      <div className="card" id="card">
        <img className="React-logo" src={logo} alt="React Native Logo"></img>
      </div>
    </div>
  );
};

export default TiltCard;
