import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

// this can be dumb or smart component - connect works with either
class Listview extends Component {


  constructor(props) {
    super(props);
    // init component state here
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.posts.map(post => {
            return (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>
                  {post.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}


// connects particular parts of redux state to this components props
const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, actions)(Listview);
