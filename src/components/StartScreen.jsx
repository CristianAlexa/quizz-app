import "../App.css";

export default function StartScreen({ setIsPlaying }) {
  return (
    <div className="container flex-center">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button className="start" onClick={() => setIsPlaying(true)}>
        Start Quiz
      </button>
    </div>
  );
}
