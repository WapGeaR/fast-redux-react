import { Route } from "react-router";
import React from "react";
import App from "./containers/App";
//Redux Smart

//Redux Dumb
import HomePage from "./containers/HomePage";
import error404 from "./components/404";
import cookie from 'react-cookie';

import PersonalContainer from './containers/PersonalContainer';
import PersonalMain from './containers/personal/PersonalMain';
import LoginPage from './containers/personal/LoginPage';

function requireAuth(nextState, replace) {
    // if(!cookie.load('token')){
    //   replace(null, '/login');
    // }
    // return true;
}

function unRequireAuth(nextState, replace) {
    // if(cookie.load('token')){
    //   replace(null, '/dashboard');
    // }
    // return true;
}


export default (
    <Route name="app" path="/" component={App}>
        <Route path="home" component={HomePage}/>
        <Route path="personal" component={PersonalContainer}>
          <Route path="/main" component={PersonalMain}/>
          <Route path="/login" component={LoginPage}/>
        </Route>
        <Route path="*" component={error404}/>
    </Route>
);
