import * as React from "react";

const MenuIcon = ({ color = "#37f5ac", strokeWidth = 2, size = "42px", className = "", ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    id="menu"
    data-name="Flat Line"
    xmlns="http://www.w3.org/2000/svg"
    className={`icon flat-line ${className}`} // Append passed className
    {...props} // Spread remaining props onto the svg
  >
    <path
      id="primary"
      d="M3,12H21M9,18H21M3,6H15"
      style={{
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: strokeWidth,
      }}
    />
  </svg>
);

export default MenuIcon;
