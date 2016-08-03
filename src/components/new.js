import { connect } from 'react-redux';
import * as actions from '../actions';
import React, { Component } from 'react';
// import marked from 'marked';


class New extends Component {

  constructor(props) {
    super(props);
    // init component state here
    this.state = {
      title: '',
      tags: '',
      content: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
  }

  onTitleChange(event) {
    event.preventDefault();
    this.setState({ title: event.target.value });
    console.log(event.target.value);
  }

  onTagsChange(event) {
    event.preventDefault();
    this.setState({ tags: event.target.value });
    console.log(event.target.value);
  }

  onContentChange(event) {
    event.preventDefault();
    this.setState({ content: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    this.props.createPost({ title: this.state.title, tags: this.state.tags, content: this.state.content });
  }

  // have some pretty editing page
  // make smart component -> local state, like searchbar
  // on submit call createpost
  render() {
    return (
      <div className="newpost">
        <h3>
          Create a new post!
        </h3>

        <div className="inputbar">
          <form>
            <input onChange={this.onTitleChange} placeholder="enter a title" value={this.state.title} />
          </form>
        </div>

        <div className="inputbar">
          <form>
            <input onChange={this.onTagsChange} placeholder="enter tags" value={this.state.tags} />
          </form>
        </div>

        <div className="inputbar">
          <form>
            <input onChange={this.onContentChange} placeholder="enter content" value={this.state.content} />
          </form>
        </div>

        <button className="button" onClick={this.handleSubmit}>{'Create Post'}</button>

      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, actions)(New);
