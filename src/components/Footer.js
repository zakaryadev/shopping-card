import React from "react";

function Footer() {
  return (
    <footer className="page-footer most-color">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Allrights reserved
          <a className="grey-text text-lighten-4 right" href="#!">
            REPO
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
