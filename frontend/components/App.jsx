import React from "react";
import { Route, Switch, Link } from "react-router";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import BusinessIndexContainer from './business/business_index_container';
import Splash from './splash/splash'
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Splash}/>
      <Route exact path="/businesses" component={BusinessIndexContainer}/>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={SignupFormContainer}/>
    </Switch>
  </div>
);

export default App;
