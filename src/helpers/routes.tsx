import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

// import { store } from '../config/store';

const mapRenderRoutes = (routes: any) => routes.map((route: any, index: number) => {
  const { path, exact, component, render, routes: nextRoutes } = route;
  return (
    <Route
      key={index}
      path={path}
      exact={exact}
      component={component}
      render={render}
      routes={nextRoutes}
      renderRoutes={renderRoutes}
    />
  );
});

export const renderRoutes = (routes: any) => {
  return (
    <Switch>
      {mapRenderRoutes(routes)}
    </Switch>
  );
};

// export const RedirectHome = () => <Redirect to="/" />

// export const RedirectLogin = (props) => <Redirect to={{ pathname: "/login", state: { from: props.location }}} />

// const isAuthenticated = () => store.getState().currentUser

// export const authenticationMiddleware = (Component) => (props) => isAuthenticated() ?
//  <Component {...props}/> : RedirectLogin(props)

//  export const adminMiddleware = (Component) => (props) => isAdmin() ?
//  <Component {...props}/> : RedirectHome()
