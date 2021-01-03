import React from "react";
import { connect } from "react-redux";
import Routes from "./routers/routes";

function App() {
  return <Routes />;
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(App);
