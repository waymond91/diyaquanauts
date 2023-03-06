import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProjectLog = (props) => {
  const [isMoved, setIsMoved] = useState(false);
  const [centerX, setCenterX] = useState(window.innerWidth / 2);
  const [centerY, setCenterY] = useState(window.innerHeight / 2);
  const linearGradient =
    "linear-gradient(0deg, rgb(205, 206, 255,1) 10%, rgba(249,226,155,1) 100%)";
  const height = 60;

  useEffect(() => {
    const updateCenter = () => {
      setCenterX(window.innerWidth / 4);
      setCenterY(window.innerHeight / 2 - height);
    };
    updateCenter();
    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
  }, []);

  const handleClick = () => {
    setIsMoved(!isMoved);
  };

  return (
    <div className="App">
      <motion.div
        style={{
          margin: "1rem"
        }}
        className="box"
        onClick={handleClick}
        animate={{
          backgroundColor: isMoved ? "#e8eeee" : "#6a7f9a",
          border: isMoved ? ".25px solid black" : null,
          height: isMoved ? 2.3 * height : height,
          width: isMoved ? 1.5 * height : height,
          x: isMoved ? centerX - height / 2 : 0,
          y: isMoved
            ? centerY - props.index * height - props.index * 16 - 16 * 10
            : 0,
          rotate: isMoved ? 0 : 0,
          scale: isMoved ? 6 : 1,
          borderRadius: isMoved ? "10px" : "50%"
        }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default ProjectLog;
