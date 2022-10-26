import React from "react";
import EmojiRow from "./EmojiRow";
import jsonArray from "../emojiList.json"

const EmojiResults = ({searchVal}) => {
  let matches = [];

  matches = (
    (searchVal) 
    ? jsonArray.filter(item => item.includes(searchVal))
    : jsonArray
  );
  
  matches.splice(20);
  
    return (
      <div style={{ width: "600px", margin: "0 auto"}}>
        <div>EmojiResults</div>
        <div>
          {matches.map((obj, i) => (<EmojiRow key={i} data={obj}/>))}
        </div>
      </div>
    )
}

export default EmojiResults;