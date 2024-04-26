import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./pages/server";
import Home from "./pages/Home";
import Layout from "./Components/Layout";
import LayoutHost from "./Components/LayoutHost";
import Login from "./Login";
import { requireAuth } from "./utils";


const router = createBrowserRouter(createRoutesFromElements(
  <Route
    path="/"
    element={<Layout />}
  >
    <Route
      index
      element={<Home />}
    />
    <Route
      path="login"
      element={<Login />}
    />
    <Route
      path="host"
      element={<LayoutHost />}
      loader={async () => await requireAuth()} />
  </Route >
))

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}