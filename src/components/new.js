import { connect } from 'react-redux';
import Show from './show';
import React from 'react';
import * as actions from '../actions';


const New = (props) => {
  return (
    <div>
      {props.posts.map(post => {
        return <Show />;
        // render some pretty editing page - see video
      })}
    </div>
  );
};

const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, { actions })(New);
