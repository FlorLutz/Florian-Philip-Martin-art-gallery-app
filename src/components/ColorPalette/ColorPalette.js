import React from "react"
import Color from "../Color/Color"

export default function ColorPalette({ colors }) {
  return (
    <>
      <p>Colors used:</p>
      <snap className="flex space-x-4">
        {colors.map((element) => (
          <Color key={element} color={element} />
        ))}
      </snap>
    </>
  )
}
