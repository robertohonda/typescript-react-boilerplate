import React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";
import { RouteChildrenProps } from "react-router";
import Route from "react-router/Route";
import {RenderRoutes} from "./renderRoutes";
import { IRoute } from "./routes";

export interface IRouteProps extends IRoute, InjectedIntlProps {
  renderRoutes: RenderRoutes;
}

const render = (Component: React.ComponentType, componentProps: any) => (routerProps: RouteChildrenProps) =>
  <Component {...routerProps} {...componentProps} />;

const ConnectedRoute: React.SFC<IRouteProps> =
  ({ path, exact, component, ...props }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={render(component, props)}
    />
  );
};

export default injectIntl(ConnectedRoute);
