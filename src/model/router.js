// 路由模块化
import Home from "../components/Home";
import Info from "../components/Home/Info";
import Main from "../components/Home/Main";

import ReactForm from "../components/ReactForm";
import Todolist from "../components/Todolist";

let routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    routes: [
      {
        path: "/",
        component: Info
      },
      {
        path: "/main",
        component: Main
      }
    ]
  },
  {
    path: "/reactform",
    component: ReactForm
  },
  {
    path: "/todolist",
    component: Todolist
  }
];

export default routes;
