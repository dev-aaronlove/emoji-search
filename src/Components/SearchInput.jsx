//TODO: update and save search, in real time, doesn't need to submit, result and pass to EmojiResults to affect what results to show
import React from "react";

const SearchInput = ({ updateSearchValue, searchVal }) => {

  return (
    <div>
      <input 
        type="text" 
        value={searchVal}
        onChange={updateSearchValue}
      />
    </div>
  )
}

export default SearchInput;