import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PostList from './posts/post-list';
import Post from './posts/post';
import {getPosts} from "../selectors/index"

class Content extends Component {
  filterPostById(posts, id) {
    console.log(posts)
    return posts.filter(post => post.id == id)[0];
  }

  render() {
    const { posts } = this.props;
    return (
      <div className='content'>
        <Switch>
          <Route exact
            path='/posts'
            render={() => (
              <PostList posts={posts} />
            )}
          />

          <Route exact
            path='/post/:id'
            render={({ match }) => (
              <Post {...this.filterPostById(posts, match.params.id)} />
            )}
          />
        </Switch>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  posts: getPosts(state)
});

export default withRouter(connect(mapStateToProps)(Content));
