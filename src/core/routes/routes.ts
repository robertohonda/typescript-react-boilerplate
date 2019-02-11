import Counter from "../../components/counter/Counter";
// import authenticationMiddleware from "../../middlewares/authentication";
import Layout from "../../components/layout";
// import Home from "../views/Home";

const routes = [
  {
    component: Layout,
    routes: [
      // {
      //   component: authenticationMiddleware(Home),
      //   exact: true,
      //   path: "/",
      // },
      {
        component: Counter,
        exact: true,
        path: "/counter",
      },
      // 404 not found
      // {
      //   component: Home,
      //   path: "*",
      // },
    ],
  },
];

export default routes;