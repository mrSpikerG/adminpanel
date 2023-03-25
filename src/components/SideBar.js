import React, { Component } from 'react';
import PropTypes from 'prop-types';
import routes from '../routes';
import LinkLine from './sidebar/LinkLine';
import CollapsingLinkLine from './sidebar/CollapsingLinkLine';

class SideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeName: "dashboard"
    };
  }

  changeState(value){
   
    this.setState({activeName: value});
  }

  checkIfActive(item) {
      if (item.key === this.state.activeName) {
        return true;
      }
    return false
  }

  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          {routes.sort(function (a, b) { return a.sort - b.sort }).map((item, index) => {

            return <div key={`Category-group-${index}`}>
              <li className="nav-item nav-category">{item.categoryName}</li>
              {item.links.map((itemLink, index) => { return itemLink.type === "collapse" ? <CollapsingLinkLine click={this.changeState.bind(this)} isActive={this.checkIfActive(itemLink)} key={`link-collapse-${index}`} links={itemLink} /> : <LinkLine key={`link-default-${index}`} isActive={this.checkIfActive(itemLink)} click={this.changeState.bind(this)} links={itemLink} /> })}
            </div>
          })}
        </ul>
      </nav>
    );
  }
}

SideBar.propTypes = {

};

export default SideBar;