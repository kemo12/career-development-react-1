import React from 'react';
import Navbar from './../../Components/Navbar/Navbar';
import Footer from './../../Components/Footer/Footer';
import './Search.css';
import googleSearch from './../../assets/images/google_search.png';
const Search = () => {
  return (
    <div>
      <Navbar />
      <Navbar />

      <div className="outerContainer">
        <div className="searchContainer">
          <div className="img-c">
            <img src={googleSearch} alt="google-search" />
          </div>
          <div className="input-c">
            <input type="text" />
          </div>
          <div className="btn-c">
            <button>Google Search</button>
            <button>I'm Feeling Lucky</button>
          </div>
          <div className="down-label">
            <p>Google offered in:</p>
            <a href="#"> العربية</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
