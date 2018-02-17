import React from 'react';
import { connect } from 'react-redux';

import { POST } from '../common/constants';
import NotFound from '../404'

const Post = (props) => {
  const { id, title, body } = props;

  return (
    <div>
      {!props.title ? (<NotFound />)
        :

      <div className='post-container'>

        <div className='post-detail'>
          <h2 className='heading'>{title}</h2>
          <p className='author-date-time'>by <b>Sample Author</b></p>
          <p className='post-body'>{body}</p>
        </div>
      </div> }
    </div>
  )
}

export default connect(
  undefined,
  { }
)(Post);
