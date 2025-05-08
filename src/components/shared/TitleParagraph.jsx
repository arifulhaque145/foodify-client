import React from "react";

export default function TitleParagraph({
  title,
  paragraph,
  titleStyle,
  paraStyle,
}) {
  return (
    <div>
      <h2 className={`${titleStyle}`}>{title}</h2>
      <p className={`${paraStyle} text-lg`}>{paragraph}</p>
    </div>
  );
}
