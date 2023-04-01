import React from "react";


const Footer = ({footerText, children}) => {
  return (
    <>
      <footer className="footer">
        <h5>{footerText}</h5>
        <ul className="footer-links">
          {children}
        </ul>
      </footer>
    </>
  );
};

export default Footer;
