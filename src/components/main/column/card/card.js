import css from "./card.module.scss";
import Details from "../../details/details";
import { Routes } from "react-router";
import { Route } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={css.card}>
      {props.task.name}
      <span> id = {props.task.id} </span>
      <Routes>
        <Route
          path="/details/{props.task.id}"
          element={<Details task={props.task} />}
        />
      </Routes>
    </div>
  );
};

export default Card;
