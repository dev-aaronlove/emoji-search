import React from "react";
import EmojiResults from "./EmojiResults";
import EmojiHeader from "./Header";
import SearchInput from "./SearchInput";

const EmojiSearchContainer = () => {
  return (
    <div style={{ margin: "10px" }}>
      <EmojiHeader />
      <SearchInput />
      <EmojiResults />
    </div>
  )
}

export default EmojiSearchContainer;