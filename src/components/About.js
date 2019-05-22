import React from "react";
import "../css/about.css";
import BiggerSearchBar from "./BiggerSearchBar";
import SideNavbar from "./SideNavbar";

const About = () => {
  return (
    <div id="aboutEnclosingDiv">
      <BiggerSearchBar />
      <SideNavbar />
      <div class="aboutContent">
        <div id="dummyDiv" />
        <div id="aboutFirstDiv">
          <p>
            The Ethereum Name Service is a distributed, open and extensible
            naming system based on the Ethereum blockchain. ENS eliminates the
            need to copy or type long addresses.
          </p>
        </div>
        <h3>ABOUT ENS</h3>
        <div id="aboutSecondDiv">
          <div className="d1">
            <p>
              Map simple names like ‘alice.eth’ to Ethereum addresses, content
              hashes, and metadata.
            </p>
          </div>
          <div className="d2">
            <p>
              Improve usability of Dapps by returning human readable names
              instead of long hashes through 'reverse resolution'
            </p>
          </div>
        </div>
        <h3>TLDS & SUBDOMAINS</h3>
        <div id="aboutThirdDiv">
          <div id="d1">
            <p>
              Like DNS, ENS operates on a system of dot-separated hierarchial
              names called domains, with the owner of a domain having full
              control over the allocation of subdomains.
            </p>
          </div>
        </div>
        <h3>HOW TO USE ENS</h3>
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
        <h3>UNDER THE SURFACE</h3>
        <div id="aboutSixthDiv">
          <div id="d1">
            <h2>The Registrar</h2>
            <p>
              The Registrar is the Smart Contract that allows you to buy or
              register a domain. Today it uses an auction process, but in the
              future you will have an instant buy option.
            </p>
          </div>
          <div id="d2">
            <h2>The Registry</h2>
            <p>
              The Registry is a Smart Contract that contains a list of all
              domains and subdomains, storing for each two pieces of
              information: the owner of the name and the Resolver.
            </p>
          </div>
        </div>

        <div id="aboutSeventhDiv">
          <div id="d1">
            <h2>Resolvers</h2>
            <p>
              Resolvers are Smart Contracts responsible for the process of
              translating names into addresses, or other types of hashes and
              resources.
            </p>
          </div>
          <div id="d2">
            <h2>Reverse Resolution</h2>
            <p>
              The Resolver can optionally perform the opposite functionality of
              "Reverse Resolving": translating an address into an associated
              name.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
