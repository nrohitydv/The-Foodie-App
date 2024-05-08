import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link href="/meals">Meal Page</Link>
      </p>
      <p>
        <Link href="/meals/share">Meal Share Page</Link>
      </p>
      <p>
        <Link href="/community">Community Page</Link>
      </p>
      <p>
        <Link href="/meals/part-1">Meal Slug Page</Link>
      </p>
    </main>
  );
}
