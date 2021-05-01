import React from "react";

export function Score({ bg }: any) {
  let classes = ["score"];

  if (bg) {
    classes.push("bg");
  }
  let yOffset = 110;
  let lineHeight = 14.4;
  let lineCol = "#a2a2a2";

  return (
    <div className={classes.join(" ")}>
      <svg width={1250} height={1000}>
        <line
          x1={10}
          y1={yOffset}
          x2={10}
          y2={yOffset + lineHeight * 4}
          stroke="black"
          strokeWidth={3}
        />
        {[0, 1, 2, 3, 4].map((l) => (
          <line
            key={l}
            x1={10}
            y1={yOffset + l * lineHeight}
            x2={800}
            y2={yOffset + l * lineHeight}
            stroke={lineCol}
            strokeWidth={2}
          />
        ))}
      </svg>
    </div>
  );
}
