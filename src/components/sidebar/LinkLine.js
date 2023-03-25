import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class LinkLine extends Component {
    render() {
        return (
            <div>
                <Link to={this.props.links.route}>
                    <li onClick={()=>{this.props.click(this.props.links.key)}} className={`nav-item ${this.props.isActive ? 'active' : ''}`}>
                        <p className="nav-link">
                            <span className="icon-bg"><i className={`mdi ${this.props.links.icon} menu-icon`} /></span>
                            <span className="menu-title">{this.props.links.name}</span>
                        </p>
                    </li>
                </Link>
            </div>
        );
    }
}

LinkLine.propTypes = {

};

export default LinkLine;