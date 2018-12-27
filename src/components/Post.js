import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = props => (
  <Fragment>
    <div className="post">
      <PostHeader avatar={props.data.avatar} name={props.data.name} time={props.data.time} />
      <p>{props.data.body}</p>
    </div>
  </Fragment>
);

Post.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
