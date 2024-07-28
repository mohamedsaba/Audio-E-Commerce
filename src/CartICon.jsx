import * as React from "react";
const CartIcon = (props) => (
  <svg
    fill="#37f5ac"
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    id="cart"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    {...props}
  >
    <path
      id="secondary-upstroke"
      d="M11,20.5h.1m5.9,0h.1"
      style={{
        fill: "none",
        stroke: "#37f5ac",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 3,
      }}
    />
    <path
      id="primary"
      d="M3,3H5.14a1,1,0,0,1,1,.85L6.62,7,8,16l11-1,2-8H6.62"
      style={{
        fill: "none",
        stroke: "#37f5ac",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
);
export default CartIcon;
