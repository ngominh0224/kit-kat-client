import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="active" to="/create">
          Create
        </NavLink>
        <NavLink exact activeClassName="active" to="/kitkats">
          List
        </NavLink>
      </div>
    );
  }
}
