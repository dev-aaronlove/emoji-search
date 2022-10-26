//TODO: on hover style changes row color and adds text on far right that says "click to copy emoji"
//TODO: on click function to save to clipboard the emoji on whatever row clicked
//TODO: popup that says "COPIED!"
import React from "react";
import "../Styles/EmojiRowStyles.css"

const EmojiRow = ({data}) => {
  return (
    <div className="emoji-row">
      <div className="emoji-symbol">{data.symbol}</div>
      <div className="emoji-title">{data.title}</div>
    </div>
  )
}

export default EmojiRow;