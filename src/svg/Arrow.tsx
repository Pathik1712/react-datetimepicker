import React from "react"

const Arrow = ({ rotate }: { rotate?: boolean }) => {
  return (
    <svg
      fill="gray"
      height="20px"
      viewBox="0 0 24 24"
      style={{ transform: `${rotate ? "rotate(180deg)" : ""}` }}
    >
      <g
        id="SVGRepo_bgCarrier"
        strokeWidth="0"
      ></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M14.657 18.657a1 1 0 0 1-.707-.293l-5.657-5.657a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 0 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-.707 1.707z"></path>{" "}
      </g>
    </svg>
  )
}

export default Arrow
