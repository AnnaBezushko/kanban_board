import css from "./layout.module.scss";
import Footer from "../footer/footer";
import Header from "../header/header";
import Main, { createTask } from "../main/main";

import React from "react";
import { Routes } from "react-router";
import {
  BrowserRouter,
  Router,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Details from "../main/details/details";
import { useState } from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/details/{props.task.id}",
    element: <Details />,
  },
]);

let initialState = {
  tasks: [
    createTask("Sprint bugfix"),
    createTask("Login page – performance issues"),
  ],
};

const Layout = () => {
  // const Main = () => {
  //   <div>
  //     <Main />
  //   </div>;
  // };

  const [state, setState] = useState(initialState);

  return (
    <div className={css.background}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main state={state} setState={setState} router={router} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;
