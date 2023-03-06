import React, { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const containerVariants = {
    hover: {
      backgroundColor: "#efefef"
    }
  };

  const boxVariants = {
    initial: {
      backgroundColor: "blue",
      x: 0,
      y: 0,
      scale: 1
    },
    animate: {
      backgroundColor: "red",
      x: 200,
      y: 200,
      scale: 1.5
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate={isHovered ? "animate" : "initial"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          margin: "20px",
          cursor: "pointer"
        }}
        onClick={handleHover}
      >
        <motion.div
          variants={boxVariants}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "10px"
          }}
        />
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate={isHovered ? "initial" : "animate"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          margin: "20px",
          cursor: "pointer"
        }}
        onClick={handleHover}
      >
        <motion.div
          variants={boxVariants}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "10px"
          }}
        />
      </motion.div>
    </div>
  );
};

export default App;
