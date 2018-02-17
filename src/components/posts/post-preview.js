import React from 'react';
import { connect } from 'react-redux';
import { Link  } from 'react-router-dom';

import { POST } from '../common/constants';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';

const PostPreview = ({ id, title, body }) => (

  <Card key={id} className="post">
    <CardTitle title={title} subtitle="by Test Author" />

    <CardText expandable={false} >
      <div className="post-content">
        {body}
      </div>
    </CardText>
    <CardActions>

      <div className="align-right">
        <FloatingActionButton mini={true} containerElement={<Link to={`/post/${id}`} />}>
          <FontIcon className="material-icons" >keyboard_arrow_right</FontIcon>
        </FloatingActionButton>
      </div>
    </CardActions>
  </Card>
)

export default connect(
  undefined,
  {}
)(PostPreview);
