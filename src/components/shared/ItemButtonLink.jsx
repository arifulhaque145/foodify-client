import React from "react";
import { Link } from "react-router-dom";

export default function ItemButtonLink({ title, link, color, soft, outline, style }) {
  return (
    <Link to={link} className={`btn ${soft} ${outline} ${color} ${style}`}>
      {title}
    </Link>
  );
}
