import React from "react";

function LinePercent({ percent, color }: LinePercentProps): JSX.Element {
  const style = {
    width: `${percent}%`,
    height: "20px",
    backgroundColor: color,
    borderRadius: "3px",
  };

  return <div style={style}></div>;
}

export default LinePercent;
