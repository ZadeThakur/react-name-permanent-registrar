import React from 'react'
import {Link} from 'react-router-dom';
import '../css/biggerSearchBar.css';

const BiggerSearchBar = () =>{
  return(
    <div id='BSBEnclosingdiv'>
    <Link to='/'><div id="BSBLogo"></div></Link>
    <form id="BSBForm">
        <input id="BSB" type="text" placeholder="Search Names"></input>
        <input className="ui primary basic button" id="BSBSearchButton" type="submit" value="Search"></input>
    </form>
    </div>
  );
}

export default BiggerSearchBar;
