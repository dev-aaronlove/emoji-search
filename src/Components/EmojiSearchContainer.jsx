import React from "react";
import EmojiResults from "./EmojiResults";
import EmojiHeader from "./Header";
import SearchInput from "./SearchInput";

const EmojiSearchContainer = () => {
  return (
    <>
      <div>EmojiSearchContainer</div>
      <EmojiHeader />
      <SearchInput />
      <EmojiResults />
    </>
  )
}

export default EmojiSearchContainer;