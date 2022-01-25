import React from "react";
import { Route, Switch, Link } from "react-router";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import BusinessIndexContainer from './business/business_index_container';
import BusinessShowContainer from "./business/business_show_container";
import ReviewIndexContainer from "./review/review_index_container";
import Splash from './splash/splash'
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Splash}/>
      <Route exact path="/businesses" component={BusinessIndexContainer}/>
      <Route exact path="/businesses/:businessId" component={BusinessShowContainer}></Route>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={SignupFormContainer}/>
    </Switch>
  </div>
);

export default App;
