import React from "react";
import "./Footer.css";
import FooterImg from "../../../static/images/shape-bg22.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={FooterImg.src} />
        <img src={FooterImg.src} style={{transform: 'rotate(180deg)'}} />
      </div>
    </div>
  );
};

export default Footer;
