import React from "react";
import { BrowserRouter } from "react-router-dom";

import renderRoutes from "./renderRoutes";
import routes from "./routes";

const AppRouter = () => (
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
);

export default AppRouter;
