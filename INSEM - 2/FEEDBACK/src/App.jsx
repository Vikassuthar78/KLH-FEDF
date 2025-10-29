import { useState } from "react";
import FeedbackForm from "./components/feedbackForm";
import "./App.css";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleFeedbackSubmit = (message) => {
    setFeedbacks((prev) => [...prev, message]);
  };

  return (
    <div className="app-container">
      <h2>Feedback FORM</h2>

      <FeedbackForm onSubmitFeedback={handleFeedbackSubmit} />

      {feedbacks.length === 0 ? (
        <p className="no-feedback">No feedback submitted yet 😶</p>
      ) : (
        <ul className="feedback-list">
          {feedbacks.map((fb, index) => (
            <li key={index} className="feedback-item">
              {fb}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
