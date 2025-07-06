import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.css";

export const metadata = {
  title: "Micro-Quiz Platform",
  description: "Take quizzes on various topics",
};

async function getCategories() {
  const res = await fetch("http://localhost:3000/api/categories");
  return res.json();
}

export default async function Home() {
  const categories = await getCategories();
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Quiz Categories</h1>
      <div className={styles.grid}>
        {categories.map((cat) => (
          <Link key={cat.id} href={`/quizzes/${cat.id}`}>
            <div className={styles.card}>
              <Image src={cat.icon} alt={cat.name} width={50} height={50} />
              <p>{cat.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
