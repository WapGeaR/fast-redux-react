import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Helmet from 'react-helmet';
import { bindActionCreators } from 'redux';

import * as SiteActions from '../../actions/site';
import * as UserActions from '../../actions/user';


class Header extends Component {

constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

    handleLogout() {
        this.props.logout(this.props.user);
    }


  render() {
    const {user, site} = this.props;

    return (
      <div>
      <Helmet title={site.pageTitle}/>
        Header
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
    return bindActionCreators(Object.assign({}, UserActions, SiteActions),dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
