import React from "react";
import { withRouter, Switch } from "react-router-dom";

import HomePage from "../../pages/home";
import LoginPage from "../../pages/login";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Routes = () => {
  return (
    <Switch>
      <PublicRoute path="/login" component={LoginPage} />
      <PrivateRoute path="/" component={HomePage} />
    </Switch>
  );
};

Routes.propTypes = {};
Routes.defaultProps = {};

export default withRouter(Routes);
