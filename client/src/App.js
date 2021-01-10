import React from "react";
import { connect } from "react-redux";
import Routers from "./routers/routes";

function App() {
  return <Routers />;
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
