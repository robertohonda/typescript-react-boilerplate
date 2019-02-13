
import Layout from "../../components/layout";
import authenticationMiddleware from "../../middlewares/authentication";
import Home from "../../views/home";

export interface IRoute {
  component: React.ComponentType<any>;
  exact?: boolean;
  path?: string;
  routes?: IRoute[];
}

const routes: IRoute[] = [
  {
    component: Layout,
    routes: [
      {
        component: authenticationMiddleware(Home),
        exact: true,
        path: "/",
      },
    ],
  },
];

export type Routes = typeof routes;

export default routes;
