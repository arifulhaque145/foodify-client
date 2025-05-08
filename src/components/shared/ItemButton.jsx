import React from "react";

export default function ItemButton({ title, click, icon, style }) {
  return (
    <button onClick={click} className={`btn ${style}`}>
      {title} {icon}
    </button>
  );
}
