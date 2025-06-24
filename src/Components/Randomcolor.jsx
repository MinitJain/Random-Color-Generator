import { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("");
  const [color, setColor] = useState("");
  // we initialise two states, one for color and other for color-type
  const generateRGBColor = () => {
    const [r, g, b] = Array.from(
      { length: 3 },
      () =>
        //instead of declaring the same logic for variables seperately, we declare them using an array.from
        Math.floor(Math.random() * 256) // since rgb ranges from 0-255
    );
    // const r = Math.floor(Math.random() * 256);
    // const g = Math.floor(Math.random() * 256);
    // const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r}, ${g}, ${b})`; // 0-255, 0-255, 0-255
    setColor(rgb); //updates this color using setColor UseState
    setTypeOfColor("RGB"); //updates the color-type using typeofColor UseState
  };

  const generateHexColor = () => {
    // function for hex color
    const letters = "0123456789ABCDEF"; // a hex color is a string of 16 characters
    let hex = "#"; //since a hex color starts with the hash# character
    for (let i = 0; i < 6; i++) {
      // a hash color is a string of 6 characters
      const randomIndex = Math.floor(Math.random() * 16);
      hex += letters[randomIndex];
    }
    setColor(hex);
    setTypeOfColor("HEX");
  };

  const generateRandomColor = () => {
    const isRGB = Math.random() < 0.5; // 50% probability since math.random generates a number b/w 0 and 1
    if (isRGB) {
      generateRGBColor();
    } else {
      generateHexColor();
    }
  };

  return (
    <div
      style={{
        backgroundColor: color || "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        gap: "40px",
      }}
    >
      <h2
        style={{
          backgroundColor: "white",
          padding: "20px 40px",
          borderRadius: "5px",
        }}
      >
        {typeOfColor
          ? `${typeOfColor} Color: ${color}`
          : "Click a button to generate color"}
      </h2>
      <div
        className="buttonContainer"
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <button style={buttonStyle} onClick={generateHexColor}>
          Create HEX Color
        </button>
        <button style={buttonStyle} onClick={generateRGBColor}>
          Create RGB Color
        </button>
        <button style={buttonStyle} onClick={generateRandomColor}>
          Generate Random Color
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  backgroundColor: "#333",
  color: "#fff",
  transition: "background-color 0.3s",
};

export default RandomColor;
