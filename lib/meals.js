// fetch data from database
import sql from "better-sqlite3";
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  //   throw new Error("Loading Meal Failed");
  return db.prepare("SELECT * FROM meals ").all();
}
