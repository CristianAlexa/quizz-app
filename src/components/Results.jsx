export default function Results({ setIsPlaying, quizz }) {
  return (
    <>
      <section className="questions">
        {quizz.map((question) => (
          <article className="question-item" key={question.id}>
            <h3 className="question-title">{question.question}</h3>
            <div className="question-answers">
              {question.answers.map((answer) => (
                <div className="answer pending" key={answer.id}>
                  <label htmlFor={answer.id}>
                    <span>{answer.answer}</span>
                  </label>
                  <input
                    type="radio"
                    id={answer.id}
                    name={answer.answer}
                    checked={answer.isSelected}
                    onChange={(e) => handleAnswerClick(e.target.id)}
                  />
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <div className="footer">
        <p>You scored 3/5 correct answers</p>
        <button className="play" onClick={() => setIsPlaying(false)}>
          Play again
        </button>
      </div>
    </>
  );
}
