import React from 'react';
import { connect } from 'react-redux';
import Show from './show';

// this can be dumb or smart component - connect works with either
const Index = (props) => {
  return (
    <div>
      {this.state.notes.entrySeq().map(([id, post]) => {
        return <Show />;
      })}
    </div>
  );
};

// connects particular parts of redux state to this components props
const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, null)(Index);
