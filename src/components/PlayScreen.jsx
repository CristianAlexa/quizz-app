import { useState } from "react";
import Questions from "./Questions";
import Results from "./Results";

export default function PlayScreen({ quizz, setIsPlaying, handleAnswerClick }) {
  const [isAnswered, setIsAnswered] = useState(false);

  return (
    <>
      {!isAnswered ? (
        <Questions
          quizz={quizz}
          setIsAnswered={setIsAnswered}
          handleAnswerClick={handleAnswerClick}
        />
      ) : (
        <Results quizz={quizz} setIsPlaying={setIsPlaying} />
      )}
    </>
  );
}
