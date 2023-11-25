export default function Questions({ quizz, setIsAnswered, handleAnswerClick }) {
  // console.log(quizz);

  const answeredQuestions = quizz.filter((question) => {
    return question.answers.filter((answer) => answer.isSelected === true);
  });

  console.log(answeredQuestions);
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
                    answer.isSelected ? "answer selected" : "answer pending"
                  }
                  key={answer.id}
                  id={answer.id}
                  onClick={(e) =>
                    handleAnswerClick(
                      e.target.id,
                      e.target.parentElement.parentElement.id
                    )
                  }
                >
                  {answer.answer}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <div className="footer">
        <button className="play" onClick={() => setIsAnswered(true)}>
          Check answers
        </button>
      </div>
    </>
  );
}
