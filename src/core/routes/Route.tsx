import React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";
import { RouteChildrenProps } from "react-router";
import Route from "react-router/Route";
import {RenderRoutes} from "./renderRoutes";
import { IRoute } from "./routes";

export interface IRouteProps extends IRoute, InjectedIntlProps {
  renderRoutes: RenderRoutes;
}

const render = ({component: Component, ...componentProps}: IRouteProps) => (routerProps: RouteChildrenProps) =>
  <Component {...routerProps} {...componentProps} />;

const ConnectedRoute: React.SFC<IRouteProps> =
  ({ path, exact, ...props }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={render(props)}
    />
  );
};

export default injectIntl(ConnectedRoute);
