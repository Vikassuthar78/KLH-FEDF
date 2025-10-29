import { useState } from "react";
import "../App.css";

function FeedbackForm({ onSubmitFeedback }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (input.trim() === "") {
      setError(true); // show the error message
      return;
    }

    setError(false);
    onSubmitFeedback(input);
    setInput(""); // clear input after submission
  };

  return (
    <div className="form-container">
      <input
        className="feedback-input"
        type="text"
        placeholder="Write your feedback..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setError(false); // hide error as soon as user types
        }}
      />
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>

      {/* ✅ Conditional rendering for error */}
      {error && <p className="error-text">⚠ Please enter feedback!</p>}
    </div>
  );
}

export default FeedbackForm;
