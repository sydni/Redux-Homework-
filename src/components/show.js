import React, { Component } from 'react';
import marked from 'marked';
import { connect } from 'react-redux';


class Show extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      isEditing: false,
    };
  }

  renderedit() {
    if (this.state.isEditing) {
      return (
        <div id="textbox">
          <textarea minRows={6} value={this.props.params.content} onChange={this.onChange} />
        </div>
      );
    } else {
      return (
        <div className="text" dangerouslySetInnerHTML={{ __html: marked(this.props.params.content || '') }} />
      );
    }
  }

  rendercheck() {
    if (this.state.isEditing) {
      return (<i className="fa fa-check" onClick={() => {
        this.setState({ isEditing: false });
      }}></i>);
    } else {
      return (<i className="fa fa-pencil" onClick={() => {
        this.setState({ isEditing: true });
      }}></i>);
    }
  }


  render() {
    return (
      <div className="post">
        <h3>
          {this.props.params.title}
          {this.rendercheck()}
        </h3>

        {this.renderedit()}

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


export default connect(mapStateToProps, null)(Show);
