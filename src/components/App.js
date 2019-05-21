import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../css/app.css';
import AccountsButton from './AccountsButton';
import SearchBar from './SearchBar';
import InfoDivs from './InfoDivs';
import Footer from './Footer';
import About from './About';
import Favourite from './Favourite';

const AboutFunction = () =>{
  return(
    <div id = 'AboutFunctionEnclosingDiv'>
      <About />
    </div>
  );
}

const FavouriteFunction = () =>{
  return(
    <div id = 'FavouriteFunctionEnclosingDiv'>
      <Favourite />
    </div>
  );
}

const Homepage = () =>{
  return(
    <div id="enclosingDiv">
    <div className="hero-image">
      <div id="AccountsButtonDiv">
        <AccountsButton />
      </div>

      <div id="logo">
      </div>

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
}

const App = () =>{
  return(
    <div id="appEnclosingDiv">
    <BrowserRouter>
      <Route path="/react-name-permanent-registrar/" exact component={Homepage} />
      <Route path="/about" exact component={AboutFunction} />
      <Route path="/favourite" exact component={FavouriteFunction} />
    </BrowserRouter>
    </div>
  );
};

export default App;
