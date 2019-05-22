import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import '../css/footer.css';

const Footer = () =>{
  return(
    <div id="footerTopDiv">
      <div class="footer-hero-image">
        <div id='footer-enclosingDiv'>
          <h2>Learn about the Permanent Registrar and the migration process.</h2>
          <Fragment>
            <a href = 'https://docs.ens.domains/permanent-registrar-faq'><button className="ui primary basic button">
            Learn More
            </button></a>
          </Fragment>
        </div>
      </div>
    </div>
  );
}

export default Footer;
