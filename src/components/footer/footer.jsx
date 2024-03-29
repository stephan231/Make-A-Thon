import React from "react";
import "./footer.css";
import { ReactComponent as Copyright } from "../../assets/copyright.svg";

const Footer = () => {
  return (
    <>
      <div className="parent-footer">
        <p className="copyright">
          Copyrights
          <Copyright className="copyright-icon" />
          2024 - Designed & developed By Stephan & Saran
        </p>
      </div>
    </>
  );
};

export default Footer;
