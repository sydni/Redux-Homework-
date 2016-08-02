import React from 'react';
import { Link } from 'react-router';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navitem">
        <Link to="/">Sydnis Blog</Link>
      </div>
      <div className="navitem">
        <Link to="/posts/new">new post</Link>
      </div>
    </div>
    );
};

export default Navbar;
