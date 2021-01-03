import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import HomePage from "../../pages/home";
import LoginPage from "../../pages/login";

const Routes = () => {
  return (
    <Switch>
      <Switch>
        <Route path="/" strict exact component={HomePage} />
        <Route path="/login" strict exact component={LoginPage} />
      </Switch>
    </Switch>
  );
};

Routes.propTypes = {};
Routes.defaultProps = {};

export default withRouter(Routes);
