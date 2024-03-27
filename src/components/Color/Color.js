import React from "react";

export default function Color({ color }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`rounded-full w-8 h-8`}
    ></div>
  );
}
