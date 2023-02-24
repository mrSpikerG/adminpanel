import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SideBar extends Component {
    render() {
        return (
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                  <li className="nav-item nav-category">Основное</li>
                  <li className={`nav-item ${this.props.isAdmin?'active':''}`}>
                    <a className="nav-link" href="admin">
                      <span className="icon-bg"><i className="mdi mdi-account-alert menu-icon" /></span>
                      <span className="menu-title">Персонал</span>
                    </a>
                  </li>
                  <li className={`nav-item ${this.props.isManager?'active':''}`}>
                    <a className="nav-link" data-toggle="collapse" href="manager" aria-expanded="false" aria-controls="ui-basic">
                      <span className="icon-bg"><i className="mdi mdi-cart-minus menu-icon" /></span>
                      <span className="menu-title">Менеджер товаров</span>
                    </a>
                    <div className="collapse" id="ui-basic">
                      <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> <a className="nav-link" href="../../pages/ui-features/buttons.html">Buttons</a></li>
                        <li className="nav-item"> <a className="nav-link" href="../../pages/ui-features/dropdowns.html">Dropdowns</a></li>
                        <li className="nav-item"> <a className="nav-link" href="../../pages/ui-features/typography.html">Typography</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="../../pages/tables/basic-table.html">
                      <span className="icon-bg"><i className="mdi mdi-table-large menu-icon" /></span>
                      <span className="menu-title">В разработке</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                      <span className="icon-bg"><i className="mdi mdi-lock menu-icon" /></span>
                      <span className="menu-title">В разработке</span>
                      <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="auth">
                      <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> <a className="nav-link" href="../../pages/samples/blank-page.html"> Blank Page </a></li>
                        <li className="nav-item"> <a className="nav-link" href="../../pages/samples/login.html"> Login </a></li>
                        <li className="nav-item"> <a className="nav-link" href="../../pages/samples/register.html"> Register </a></li>
                        <li className="nav-item"> <a className="nav-link" href="../../pages/samples/error-404.html"> 404 </a></li>
                        <li className="nav-item"> <a className="nav-link" href="../../pages/samples/error-500.html"> 500 </a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item documentation-link">
                    <a className="nav-link" href="../index.html" target="_blank">
                      <span className="icon-bg">
                        <i className="mdi mdi-file-document-box menu-icon" />
                      </span>
                      <span className="menu-title">(в разработке)</span>
                    </a>
                  </li>
                </ul>
              </nav>
        );
    }
}

SideBar.propTypes = {

};

export default SideBar;