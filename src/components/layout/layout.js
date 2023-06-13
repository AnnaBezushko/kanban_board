import css from "./layout.module.scss";
import Footer from "../footer/footer";
import Header from "../header/header";
import Main from "../main/main";

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
import {createTask, filterBacklog, filterFinished} from "../main/taskStatus";
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

const initialState = {
  tasks: [
    createTask("Sprint bugfix"),
    createTask("Login page – performance issues"),
  ],
};

function loadState(){
  const kanbanState = localStorage.getItem('kanbanState');
  if(!kanbanState) return initialState;

  try {
    return JSON.parse(kanbanState);
  } catch (e) {
    throw Error('Bad kanbanState, clear localstorage');
  }
}

const Layout = () => {
  const [state, setState] = useState(loadState());
  const finishedCount = state.tasks.filter(filterFinished).length;
  const activeCount = state.tasks.filter(filterBacklog).length;
  const setStateWithLocalStorage = (state) => {
    localStorage.setItem('kanbanState', JSON.stringify(state));
    setState(state);
  }

  return (
    <div className={css.background}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main state={state} setState={setStateWithLocalStorage} router={router} />}
        />
      </Routes>
      <Footer finishedCount={finishedCount} activeCount={activeCount}/>
    </div>
  );
};

export default Layout;
