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
  
  // console.log('matches before splice: ', matches);
  matches.splice(20);
  console.log('matches: ', matches);
  
    return (
      <>
        <div>EmojiResults</div>
        <div>
          {matches.map((obj, i) => (<EmojiRow key={i} data={obj}/>))}
        </div>
      </>
    )
}

export default EmojiResults;