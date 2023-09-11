import React from "react";

export default function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px",
    marginTop: "10px",
  };
  return <div style={style}>{children}</div>;
}
