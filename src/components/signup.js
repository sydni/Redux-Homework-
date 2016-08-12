import { connect } from 'react-redux';
import * as actions from '../actions';
import React, { Component } from 'react';
// import marked from 'marked';


class Signup extends Component {

  constructor(props) {
    super(props);
    // init component state here
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.nosubmit = this.nosubmit.bind(this);
  }

  onUsernameChange(event) {
    event.preventDefault();
    this.setState({ username: event.target.value });
    console.log(event.target.value);
  }

  onEmailChange(event) {
    event.preventDefault();
    this.setState({ email: event.target.value });
    console.log(event.target.value);
  }

  onPasswordChange(event) {
    event.preventDefault();
    this.setState({ password: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    console.log('in handlesubmit');
    this.props.signupUser({ email: this.state.email, password: this.state.password, username: this.state.username });
  }

  nosubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  // have some pretty editing page
  // make smart component -> local state, like searchbar
  // on submit call createpost
  render() {
    return (
      <div className="newpost">
        <h3>
          Sign up!
        </h3>

        <div className="inputbar">
          <form onSubmit={this.nosubmit}>
            <input onChange={this.onEmailChange} placeholder="email" value={this.state.email} />
          </form>
        </div>

        <div className="inputbar">
          <form onSubmit={this.nosubmit}>
            <input onChange={this.onUsernameChange} placeholder="username" value={this.state.username} />
          </form>
        </div>

        <div className="inputbar">
          <form onSubmit={this.nosubmit}>
            <input type="password" onChange={this.onPasswordChange} placeholder="password" value={this.state.password} />
          </form>
        </div>

        <button className="button" onClick={this.handleSubmit}>{'Sign up'}</button>

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
export default connect(mapStateToProps, actions)(Signup);
