import css from "./layout.module.scss";
import Footer from "../footer/footer";
import Header from "../header/header";
import Main from "../main/main";

import React from "react";
import { Routes } from "react-router";
import { Route } from "react-router-dom";
import { TaskPage } from "../taskPage/TaskPage";
import { useTasks } from "../hooks/tasks/taskProvider";

const Layout = () => {
  const { getActiveTaskCount, getFinishedTaskCount } = useTasks();
  return (
    <div className={css.background}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/task/:taskId" element={<TaskPage />} />
      </Routes>
      <Footer
        finishedCount={getFinishedTaskCount()}
        activeCount={getActiveTaskCount()}
      />
    </div>
  );
};

export default Layout;
