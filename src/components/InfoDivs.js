import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../css/infoDivs.css";

const InfoDivs = () => {
  return (
    <div id="topDiv">
      <div id="firstDiv">
        <div id="enclosingFirstDiv">
          <div id="headingfirstDiv">
            <h2>What it is?</h2>
          </div>
          <div id="contentfirstDiv">
            <h5>
              The Ethereum Name Service is a distributed, open and extensible
              naming system based on the Ethereum blockchain. ENS eliminates the
              need to copy or type long addresses.
            </h5>
          </div>

          <Fragment>
            <Link to="/about">
              <button className="ui primary basic button">Learn More</button>
            </Link>
          </Fragment>
        </div>
      </div>

      <div id="secondDiv">
        <p>alice.mywallet.eth</p>
      </div>

      <div id="thirdDiv">
        <div id="aboutfourthDiv">
          <div id="d1">
            <h2>Search for names</h2>
            <p>
              Find domains and subdomains that you can register or learn more
              about.
            </p>
          </div>
          <div id="d2">
            <h2>Save favourite names</h2>
            <p>
              Keep track of domains and subdomains that you own or that you want
              to follow.
            </p>
          </div>
        </div>
        <div id="aboutFifthDiv">
          <div id="d1">
            <h2>Register names</h2>
            <p>
              Register .eth names for $5/year. Renew or cancel your name
              registration at any time.
            </p>
          </div>
          <div id="d2">
            <h2>Manage names</h2>
            <p>
              Point domains to your ethereum addresses, transfer ownership to
              other people and more.
            </p>
          </div>
        </div>
      </div>

      <div id="fourthDiv">
        <div id="enclosingFourthDiv">
          <div id="headingFourthDiv">
            <h2>How to use ENS</h2>
          </div>
          <div id="contentfourthDiv">
            <h5>
              The ENS App is a Graphical User Interface for non-technical users.
              it points to and create subdomains for each name.
            </h5>
          </div>
          <div>
            <Link to="/about">
              <button className="ui primary basic button">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoDivs;
