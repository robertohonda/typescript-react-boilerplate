import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import { IRoute, Routes } from "./routes";

const mapRenderRoutes = (routes: Routes) => routes.map((route: IRoute, index: number) => {
  const { path, exact, component, routes: nextRoutes } = route;
  return (
    <Route
      key={index}
      path={path}
      exact={exact}
      component={component}
      routes={nextRoutes}
      renderRoutes={renderRoutes}
    />
  );
});

const renderRoutes = (routes: Routes) => {
  return (
    <Switch>
      {mapRenderRoutes(routes)}
    </Switch>
  );
};

export type RenderRoutes = typeof renderRoutes;

export default renderRoutes;
