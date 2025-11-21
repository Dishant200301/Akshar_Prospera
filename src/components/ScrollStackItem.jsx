import React from "react";

const ScrollStackItem = ({ children, itemClassName = "", style = {} }) => (
  <div
    className={`scroll-stack-card absolute left-0 right-0 mx-auto ${itemClassName}`}
    style={{
      willChange: "transform, opacity",
      backfaceVisibility: "hidden",
      transformStyle: "flat",
      isolation: "isolate",
      ...style,
    }}
  >
    {children}
  </div>
);

export default ScrollStackItem;
