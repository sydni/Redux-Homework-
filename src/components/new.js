import React, { Component } from 'react';

class New extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default New;
