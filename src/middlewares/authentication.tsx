import React from "react";
import { connect } from "react-redux";

const renderComponent = (Component: React.ComponentType) => () => <Component />;

const mapStateToProps = () => ({
});

const authenticationMiddleware = (Component: React.ComponentType) =>
  connect(mapStateToProps)(renderComponent(Component));

export default authenticationMiddleware;
