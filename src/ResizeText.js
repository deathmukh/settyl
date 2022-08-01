import React from "react";

export default function ResizeText( {resizeText}) {
  return (
    <div>
      The following text will look different on mobile and tablets
      <br />
      {resizeText}
    </div>
  );
}
