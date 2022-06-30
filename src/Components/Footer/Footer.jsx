import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <div className="Footer">
      <div className="left-footer">
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Advertsing</a>
          </li>
          <li>
            <a>Business</a>
          </li>
          <li>
            <a>Home Search Works</a>
          </li>
        </ul>
      </div>
      <div className="right-footer">
        <ul>
          <li>
            <a>Privcay</a>
          </li>
          <li>
            <a>Terms</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
