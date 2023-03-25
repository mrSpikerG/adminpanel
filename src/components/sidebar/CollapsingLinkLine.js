import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapse from 'react-bootstrap/Collapse';
import { Link } from 'react-router-dom';

class CollapsingLinkLine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }


    render() {
        return (
            <div>
                <li className={`nav-item ${this.props.isActive ? 'active' : ''}`}>
                    <p onClick={()=>{this.setState({isOpen: !this.state.isOpen})}} className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                        <span className="icon-bg"><i className={`mdi ${this.props.links.icon} menu-icon`} /></span>
                        <span className="menu-title">{this.props.links.name}</span>
                        <span style={{marginLeft:"auto"}}><i className={`mdi ${this.state.isOpen?"mdi-menu-down":"mdi-menu-left"} menu-icon`} /></span>
                    </p>

                    <Collapse in={this.state.isOpen}>
                
                        <ul className="nav flex-column sub-menu">
                            {this.props.links.links.map((item,index)=>{
                                return  <li onClick={()=>{this.props.click(this.props.links.key)}} key={`collapse-link-context-${index}`} className="nav-item"> 
                                <Link  className="nav-link" to={item.route}> {item.name} </Link>
                                </li>
                                })}
                        </ul>
                    </Collapse>
                </li>
            </div>
        );
    }
}

CollapsingLinkLine.propTypes = {

};

export default CollapsingLinkLine;