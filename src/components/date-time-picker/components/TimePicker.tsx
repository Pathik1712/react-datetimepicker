import React, { useEffect, useState } from "react"

const TimePicker = () => {
  const renderNumbers = () => {
    const numbers = []
    for (let i = 1; i <= 12; i++) {
      const angle = (i * 30 * Math.PI) / 180 // Calculate angle for each number
      const x = 100 * Math.cos(angle) + 100 // X coordinate
      const y = 100 * Math.sin(angle) + 100 // Y coordinate

      numbers.push(
        <div
          key={i}
          style={{
            left: `${x}px`,
            top: `${y}px`,
            position: "absolute",
            width: "20px",
            height: "20px",
            textAlign: "center",
            lineHeight: "20px",
            fontSize: "14px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            transform: "translate(-50%, -50%)",
          }}
        >
          {i}
        </div>
      )
    }
    return numbers
  }
  return (
    <div
      style={{
        position: "absolute",
        width: " 200px",
        height: " 200px",
        border: " 2px solid #333",
        borderRadius: " 50%",
        top: "120%",
      }}
    >
      {renderNumbers()}
    </div>
  )
}

export default TimePicker
