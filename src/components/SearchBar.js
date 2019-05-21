import React from 'react';
import '../css/searchBar.css';

const SearchBar = () =>{
  return(
      <div id="searchBarEnclosingDiv">
        <input id="searchBar" type="text" placeholder="Search names"></input>
        <input className="ui primary basic button" id="searchButton" type="submit" value="Search"></input>
      </div>
  );
};

export default SearchBar;
