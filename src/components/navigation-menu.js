import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import { Link, withRouter } from 'react-router-dom';


const NavigationMenu = ({location}) => {
  return (
    <Drawer
      docked={true}
      width={200}
      open={true}
      openSecondary={false}
    >
      <AppBar title="Articles" iconStyleLeft={{display: 'none'}} />

    </Drawer>
)};

export default withRouter(NavigationMenu);
