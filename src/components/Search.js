import React, {useState} from "react";

function Search({searchTerm, setSearchTerm}) {
  function handleChange(e) {
    setSearchTerm(e.target.value)
  }
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
