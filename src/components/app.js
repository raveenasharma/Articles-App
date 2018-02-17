import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getAllPosts } from 'actions/posts';
import Content from './main-app';
import NavigationMenu from './navigation-menu';

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className='main-container'>
        <NavigationMenu />
        <Content/>
      </div>
    );
  }
}

export default withRouter(connect(undefined,
  {fetchPosts: getAllPosts }
)(App));
