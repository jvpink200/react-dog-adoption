import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer className="site-footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12 text-center p-3">
              <ul className="list-unstyled">
                <li>
                  <Link className="text-white hover-text" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12 text-center p-3">
              <ul className="list-unstyled">
                <li>
                  <Link className="text-white hover-text" to="/contactus">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12 text-center p-3">
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/"
              >
                <i className="fa fa-linkedin" />
              </a>
            </div>
            <div className="col-md-3 col-sm-12 text-center p-3 ">
              <a
                className="btn btn-social-icon btn-github"
                href="http://www.github.com/"
              >
                <i className="fa fa-github" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;