import React from "react";
import SearchBar from "../components/SearchBar";
import InfoDivs from "../components/InfoDivs";
import Footer from "../components/Footer";
import AccountsButton from "../components/AccountsButton";

const Homepage = () => {
  return (
    <div id="enclosingDiv">
      <div className="hero-image">
        <div id="AccountsButtonDiv">
          <AccountsButton />
        </div>

        <div id="logo" />

        <div id="SearchBarDiv">
          <SearchBar />
        </div>
      </div>
      <div id="infoDivs">
        <InfoDivs />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
