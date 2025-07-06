"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./quiz.module.css";

export default function QuizPage() {
  const params = useParams();
  const [quiz, setQuiz] = useState(null);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    async function fetchQuiz() {
      const res = await fetch(`/api/quiz/${params?.id}`);
      const data = await res.json();
      setQuiz(data);
    }
    if (params?.id) fetchQuiz();
  }, [params]);

  if (!quiz) return <p>Loading...</p>;
  const currentQ = quiz.questions[current];

  const handleAnswer = (opt) => {
    setSelected(opt);
    if (opt === currentQ.answer) setScore(score + 1);
    setTimeout(() => {
      if (current + 1 < quiz.questions.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{quiz.title}</h1>
      {showResult ? (
        <div className={styles.result}>
          Your Score: {score} / {quiz.questions.length}
        </div>
      ) : (
        <div>
          <p className={styles.question}>
            Q{current + 1}: {currentQ.question}
          </p>
          <div className={styles.options}>
            {currentQ.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt)}
                disabled={!!selected}
                className={`${styles.option} ${
                  selected === opt
                    ? opt === currentQ.answer
                      ? styles.correct
                      : styles.incorrect
                    : ""
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
