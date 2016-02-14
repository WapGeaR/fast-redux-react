import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { Router, Link } from 'react-router';

import {reduxForm} from 'redux-form';
import Helmet from 'react-helmet'
import * as UserActions from '../../actions/user';


class Login extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    // onSubmit(event) {
    //     event.preventDefault();
    //     const login = this.refs.login.getValue();
    //     const password = this.refs.password.getValue();
    //     this.props.auth(login, password);
    //     console.log(`Login: ${login} Password: ${password}`);
    // }

    render() {
        return (<div>
          {!this.props.user.info &&
            <form className="login" onSubmit={this.onSubmit}>
                <h2 style={{fontWeight:100}}>Login page</h2>

            </form>}</div>
        );
    }
}

Login.contextTypes = {
 history: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(UserActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
