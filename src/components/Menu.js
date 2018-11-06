import React, { Component } from 'react';

import { Link } from 'react-router-dom';


export default class Menu extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">Calendar.io</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="./friends">Friends</Link></li>
              <li><Link to="./profile">Profile</Link></li>
              <li><Link to="./" onClick={this.props.performLogout}>Log out</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
