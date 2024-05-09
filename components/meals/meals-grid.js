import classes from "./meals-grid.module.css";

function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealsGrid {...meal} />
        </li>
      ))}
    </ul>
  );
}

export default MealsGrid;
