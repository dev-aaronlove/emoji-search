//TODO: on hover style changes row color and adds text on far right that says "click to copy emoji"
//TODO: on click function to save to clipboard the emoji on whatever row clicked
//TODO: popup that says "COPIED!"
import React from "react";

const EmojiRow = ({data}) => {
  return (
    <div className="row justify-content-center">
      <div>{data.symbol}</div>
      <div>{data.title}</div>
    </div>
  )
}

export default EmojiRow;