//TODO: on hover style changes row color and adds text on far right that says "click to copy emoji"
//TODO: on click function to save to clipboard the emoji on whatever row clicked
//TODO: popup that says "COPIED!"
import React, { useState } from "react";
import "../Styles/EmojiRowStyles.css"

const EmojiRow = ({data}) => {
  const [isShown, setIsShown] = useState(false);

  const copyEmoji = () => navigator.clipboard.writeText(data.symbol);

  return (
    <div 
      className="emoji-row"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={copyEmoji}
    >
      <div className="emoji">
        <div className="emoji-symbol">{data.symbol}</div>
        <div className="emoji-title">{data.title}</div>
      </div>
      {isShown && (
        <div className="text-muted emoji-copy-msg">Click to Copy emoji</div>
      )}
    </div>
  )
}

export default EmojiRow;