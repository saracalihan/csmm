import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = false;
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(props);

        return token ? (
          <Component {...props} />
        ) : (
          <div>
            <button onClick={(window.location.href = "/login")}></button>
          </div>
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};
PrivateRoute.defaultProps = {};

export default PrivateRoute;
