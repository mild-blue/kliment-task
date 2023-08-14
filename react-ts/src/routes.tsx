import React from "react";
import { RouteObject } from "react-router-dom";

import { Homepage } from "./routes/Homepage";
import { Login } from "./routes/Login";
import { NoMatch } from "./routes/NoMatch";

type Route = Omit<RouteObject, "path"> & {
  path: string;
};

export const HomePageRoute: Route = {
  path: "/",
  element: <Homepage />,
};
export const LoginRoute: Route = {
  path: "/login",
  element: <Login />,
};
export const NoMatchRoute: Route = {
  path: "*",
  element: <NoMatch />,
};

export const routes: Route[] = [HomePageRoute, LoginRoute, NoMatchRoute];
