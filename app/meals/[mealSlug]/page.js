import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
//Dynamic metadat
export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
}

function MealDetails({ params }) {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }
  // for line breaks
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt="" fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          //  dangerouslySetInnerHTML, as it can expose your application to cross-site scripting (XSS) attacks if the content is not properly sanitized.
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}

export default MealDetails;
