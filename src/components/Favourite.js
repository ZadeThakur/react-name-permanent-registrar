import React from 'react';
import '../css/favourite.css';
import BiggerSearchBar from './BiggerSearchBar';
import SideNavbar from './SideNavbar';

const Favourite = () =>{
  return(
    <div id="favouriteEnclosingDiv">
      <BiggerSearchBar />
      <SideNavbar />
      <div class="favouriteContent">
      <h2>Favourite Top Level Domains</h2>
        <div id="favouriteFirstDiv">
          <div id="d1"><p>To add names to favourites, click the heart
          icon next to any desired name.</p></div>
        </div>
      <h2>Favourite Sub Domains</h2>
      <div id="favouriteSecondDiv">
        <div id="d1"><p>To add names to favourites, click the heart
        icon next to any desired name.</p></div>
      </div>
      </div>
    </div>
  );
}

export default Favourite;
