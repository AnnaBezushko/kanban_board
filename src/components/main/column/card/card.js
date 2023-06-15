import css from "./card.module.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={css.card}>
      <Link to={`/task/${props.task.id}`} className={css.cardTitle}>
        {props.task.name}
      </Link>
    </div>
  );
};

export default Card;
