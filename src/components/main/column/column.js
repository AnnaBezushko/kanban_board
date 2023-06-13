import css from "./column.module.scss";
import React from "react";
import Card from "./card/card";
import columnHeader from "./header/columnHeader";
import columnFooter from "./footer/columnFooter";
import ColumnHeader from "./header/columnHeader";
import ColumnFooter from "./footer/columnFooter";
import Scrollbars from "react-custom-scrollbars-2";
import { Routes } from "react-router";
import { Route } from "react-router-dom";

const Column = (props) => {
  return (
    <div className={css.column}>
      <ColumnHeader name={props.name} />
      {props.tasklist.map((task) => (
        <Card task={task} />
      ))}
      <ColumnFooter
        withInput={props.withInput}
        selectOptions={props.selectOptions}
        addTask={props.addTask}
      />
    </div>
  );
};

export default Column;
