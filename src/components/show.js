import React, { Component } from 'react';
// import marked from 'marked';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Show extends Component {
  constructor(props) {
    super(props);

    // init component state here
    if (this.props.post) {
      this.state = {
        isEditing: false,
        title: this.props.post.title,
        tags: this.props.post.tags,
        content: this.props.post.content,
      };
    } else {
      this.state = {
        isEditing: false,
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.nosubmit = this.nosubmit.bind(this);
  }


  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
    console.log(this.props.post);
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
    console.log(this.state.content);
  }

  handleSubmit(event) {
    this.props.updatePost(this.props.params.id, { title: this.state.title, tags: this.state.tags, content: this.state.content });
  }

  nosubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }


  // rendercheck() {
  //   if (!this.state.isEditing) {
  //     return (<button onClick={() => {
  //       this.setState({ isEditing: true });
  //     }}>Edit Post</button>);
  //   } else {
  //     return (
  //       <div>
  //       </div>
  //     );
  //   }
  // }

  /*
  <div className="post">
    <h3>
      {this.props.params.title}
      {this.rendercheck()}
    </h3>

    {this.renderedit()}

  </div>

  */
// {this.props.post.title}
//


  render() {
    if (!this.props.post) {
      return (
        <h3>
          Loading..
        </h3>
      );
    } else if (this.state.isEditing) {
      return (
        <div className="newpost">

          <div className="inputbar">
            <form onSubmit={this.nosubmit}>
              <input onChange={this.onTitleChange} placeholder="enter a title" value={this.state.title} />
            </form>
          </div>

          <div className="inputbar">
            <form onSubmit={this.nosubmit}>
              <input onChange={this.onTagsChange} placeholder="enter tags" value={this.state.tags} />
            </form>
          </div>

          <div>
            <textarea onSubmit={this.nosubmit} onChange={this.onContentChange} placeholder="enter content" value={this.state.content}>
            </textarea>
          </div>

          <button className="button" onClick={this.handleSubmit}>{'Update Post'}</button>

        </div>


      );
    } else {
      return (
        <div>
          <div className="post">
            <div className="title">
              {this.props.post.title}
            </div>
            <div className="content">
              {this.props.post.content}
            </div>


            <button className="push" onClick={() => {
              this.setState({ isEditing: true, title: this.props.post.title, tags: this.props.post.tags, content: this.props.post.content });
            }}>Edit Post</button>

            <button className="push" onClick={() => {
              this.props.deletePost(this.props.params.id);
            }}>Delete Post</button>

          </div>

        </div>

      );
    }
  }
}

// connects particular parts of redux state to this components props
const mapStateToProps = (state) => (
  {
    post: state.posts.currentPost,
  }
);


export default connect(mapStateToProps, actions)(Show);
