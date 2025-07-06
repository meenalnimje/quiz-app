import Link from "next/link";
import styles from "./category.module.css";

export async function generateMetadata({ params }) {
  return {
    title: `${capitalize(params.category)} Quizzes`,
    description: `Explore quizzes under the ${params.category} category.`,
  };
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default async function CategoryPage({ params }) {
  const res = await fetch(
    `http://localhost:3000/api/quizzes/${params.category}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return (
      <div className={styles.container}>
        <h1>Category not found</h1>
      </div>
    );
  }

  const quizzes = await res.json();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{capitalize(params.category)} Quizzes</h1>
      {quizzes.length === 0 ? (
        <p>No quizzes available in this category.</p>
      ) : (
        <ul className={styles.list}>
          {quizzes.map((quiz) => (
            <li key={quiz.id}>
              <Link href={`/quiz/${quiz.id}`} className={styles.link}>
                {quiz.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
