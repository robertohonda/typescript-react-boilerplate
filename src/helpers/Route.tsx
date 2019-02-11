import PropTypes from "prop-types";
import React from "react";
import { injectIntl } from "react-intl";
import Route from "react-router/Route";

const renderMiddleware = ({ render, Component, intl, routes, renderRoutes }: any) => (props: any) => render
  ? render({ ...props, intl, routes, renderRoutes })
  : <Component {...props} intl={intl} routes={routes} renderRoutes={renderRoutes} />;

const ConnectedRoute = ({ intl, path, exact, render, component: Component, routes, renderRoutes }: any) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={renderMiddleware({ render, Component, intl, routes, renderRoutes })}
    />
  );
};

ConnectedRoute.propTypes = {
  // intl: intlShape.isRequired,
  component: PropTypes.func,
  exact: PropTypes.bool,
  path: PropTypes.string,
  render: PropTypes.func,
  renderRoutes: PropTypes.func.isRequired,
  routes: PropTypes.array,
};

export default injectIntl(ConnectedRoute);

// export default ConnectedRoute;
