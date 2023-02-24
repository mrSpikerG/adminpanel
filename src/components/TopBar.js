import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopBar extends Component {
    render() {
        return (
            <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
              <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a href="../index.html" className="text-decoration-none">
                  <span className="h1 text-uppercase text-primary bg-dark px-2">Phone</span>
                  <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
                </a>
              </div>
            </nav>
        );
    }
}

TopBar.propTypes = {

};

export default TopBar;