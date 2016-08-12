import { Link } from 'react-router';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as actions from '../actions';


// const Navbar = (props) => {
//   return (
//     <div className="navbar">
//       <div className="navitem">
//         <Link to="/">Sydnis Blog</Link>
//       </div>
//       <div className="navitem">
//         <Link to="/posts/new">new post</Link>
//       </div>
//     </div>
//     );
// };

class Navbar extends Component {
  constructor(props) {
    super(props);

    // init component state here

    this.state = {

    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.signoutUser({ username: this.state.username, password: this.state.password });
  }

  rendersign() {
    if (this.props.authenticated) {
      return (
        <div className="navitem">
          <button className="button" onClick={this.handleSubmit}>{'Sign out'}</button>
        </div>
      );
    } else {
      return (
        <div>
          <div className="navitem">
            <Link to="signin">Sign In</Link>
          </div>
          <div className="navitem">
            <Link to="signup">Sign up</Link>
          </div>
        </div>
      );
    }
  }


  render() {
    return (
      <div className="navbar">
        <div className="navitem">
          <Link to="/">Sydnis Blog</Link>
        </div>
        <div className="navitem">
          <Link to="/posts/new">new post</Link>
        </div>

        {this.rendersign()}

      </div>
    );
  }
}


const mapStateToProps = (state) => (
  {
    authenticated: state.auth.authenticated, //????? do i need to change this
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, actions)(Navbar);
