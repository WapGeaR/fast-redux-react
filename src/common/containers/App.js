import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import request from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import * as UserActions from '../actions/user';
import Helmet from 'react-helmet';
import Home from './HomePage'
import Header from '../components/layout/Header'
import cookie from 'react-cookie';

class App extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
    this.eventUndo = this.eventUndo.bind(this)
    this.eventRedo = this.eventRedo.bind(this)
  }

  componentWillReceiveProps(nextState) {
    if(nextState.user.token && !cookie.load('token')) {
      console.log('Setting up token in cookie');
      cookie.save('token', nextState.user.token);
    }

    if(nextState.user.token && !nextState.user.info) {
      this.props.getUserInfo(nextState.user);
    }

    if(nextState.user.updateUser) {
      this.props.getUserInfo(nextState.user);
      this.props.toggleGetUserInfo(nextState.user);
    }

    if(nextState.user.clearCookie && cookie.load('token')) {
      cookie.remove('token');
      this.props.toogleClearCookie();
      window.location = '/';
    }
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  eventUndo(e) {
    e.preventDefault();
    this.props.undo();
  }

  eventRedo(e) {
    e.preventDefault();
    this.props.redo();
  }

  render() {

    const { user, site } = this.props;


    return (
      <div>
        <Header/>
        <div>
          {!this.props.children && <Home />}
          {this.props.children}
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
  	user : state.user,
    site: state.site
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, {}, UserActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
