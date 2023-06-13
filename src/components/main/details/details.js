import css from "./details.module.scss";
import Header from "../../header/header";
import Footer from "../../footer/footer";

const Details = (props) => {
  return (
    <div>
      <Header />
      <div className={css.details}>
        <h1 className={css.name}>{props.task.name}</h1>
        <p className={css.text}>
          {props.task.description}
          Это был темный лес, издали казавшийся непроходимым. Там Пахапиль
          охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока
          русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся.
          Он появился в Раквере, где советский капитан наградил его медалью.
          Медаль была украшена четырьмя непонятными словами, фигурой и
          восклицательным знаком.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
