import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};
PrivateRoute.defaultProps = {
  location: { from: { pathname: "/" } },
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
