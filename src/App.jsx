import { useEffect, useState } from "react";
import "./App.css";
import PlayScreen from "./components/PlayScreen";
import StartScreen from "./components/StartScreen";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [quizz, setQuizz] = useState([]);

  useEffect(() => {
    const endPiont =
      "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple";

    async function getQuizzQuestions() {
      const response = await fetch(endPiont);
      const data = await response.json();
      const quizzRawData = await data.results;
      const quizzData = await quizzRawData.map((result) => {
        const {
          category,
          difficulty,
          question,
          correct_answer,
          incorrect_answers,
        } = result;

        const correctAnswer = {
          answer: decode(correct_answer),
          isCorrect: true,
          isSelected: false,
          id: nanoid(),
        };

        const incorrectAnswers = incorrect_answers.map((answer) => {
          return {
            answer: decode(answer),
            isCorrect: false,
            isSelected: false,
            id: nanoid(),
          };
        });

        const allAnswers = [correctAnswer, ...incorrectAnswers];

        const answers = () => {
          const newArray = allAnswers;

          for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
          }
          return newArray;
        };

        return {
          id: nanoid(),
          category: category,
          difficulty: difficulty,
          question: decode(question),
          answers: answers(),
        };
      });
      setQuizz(quizzData);
    }
    getQuizzQuestions();
  }, [isPlaying]);

  function handleAnswerClick(answerId, questionId) {
    setQuizz(
      quizz.map((question) => {
        if (questionId === question.id) {
          return {
            ...question,
            answers: question.answers.map((answer) => {
              if (answerId === answer.id) {
                return {
                  ...answer,
                  isSelected: true,
                };
              } else {
                return {
                  ...answer,
                  isSelected: false,
                };
              }
            }),
          };
        } else {
          return question;
        }
      })
    );
  }

  return (
    <div className="container">
      {!isPlaying ? (
        <StartScreen setIsPlaying={setIsPlaying} />
      ) : (
        <PlayScreen
          quizz={quizz}
          setIsPlaying={setIsPlaying}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
}

export default App;
