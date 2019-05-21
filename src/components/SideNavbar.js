import React from 'react';
import {Link} from 'react-router-dom';
import '../css/sideNavbar.css';
import AccountsButton from './AccountsButton';

const SideNavbar = () =>{
  return(
    <div id="sideNavbarEnclosingDiv">
    <div id="navbarAccountsButton">
      <AccountsButton />
    </div>
    <br></br>
      <Link to="/favourite">Favourite</Link>
      <br></br>
      <Link to="/about">About</Link>
    </div>
  );
};

export default SideNavbar;
