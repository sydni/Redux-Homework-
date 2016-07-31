import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div>
        <Link to="/">your site name</Link>
        <Link to="posts/new">new post</Link>
      </div>
    );
  }
}

export default Navbar;
