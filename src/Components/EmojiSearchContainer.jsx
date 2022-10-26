import React from "react";
import EmojiResults from "./EmojiResults";
import EmojiHeader from "./Header";
import SearchInput from "./SearchInput";

class EmojiSearchContainer extends React.Component {
  state = { searchValue: "" }

  updateSearchValue = ({ target: {value} }) => this.setState({searchValue: value});

  render() {
    return (
        <div style={{ margin: "10px" }}>
        <EmojiHeader />
        <SearchInput updateSearchValue={this.updateSearchValue} searchVal={this.state.searchValue}/>
        <EmojiResults searchVal={this.state.searchValue}/>
      </div>
    )
  }
}

export default EmojiSearchContainer;