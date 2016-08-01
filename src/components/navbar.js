import React from 'react';
import { Link } from 'react-router';

const Navbar = (props) => {
  return (
    <div>
      <Link to="/">Sydnis Blog</Link>
      <Link to="/posts/new">new post</Link>
    </div>
    );
};

export default Navbar;
