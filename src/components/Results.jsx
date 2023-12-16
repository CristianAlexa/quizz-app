export default function Results({ setIsPlaying, quizz }) {
  const correctAnswerCount = () => {
    let count = 0;
    quizz.map((question) =>
      question.answers.map((answer) =>
        answer.isSelected === true && answer.isCorrect === true
          ? count++
          : count
      )
    );
    return count;
  };
  console.log(correctAnswerCount());
  return (
    <>
      <section className="questions">
        {quizz.map((question) => (
          <article className="question-item" key={question.id} id={question.id}>
            <h3 className="question-title">{question.question}</h3>
            <div className="question-answers">
              {question.answers.map((answer) => (
                <div
                  className={
                    answer.isCorrect
                      ? "answer correct"
                      : answer.isSelected && !answer.isCorrect
                      ? "answer wrong"
                      : "answer"
                  }
                  key={answer.id}
                  id={answer.id}
                >
                  {answer.answer}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <div className="footer">
        <p>You scored {correctAnswerCount()} / 5 correct answers</p>
        <button className="" onClick={() => setIsPlaying(false)}>
          Play again
        </button>
      </div>
    </>
  );
}
