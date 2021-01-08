import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";
import FeedbackOptions from "./components/Feedback-options";
import NotificationMessage from "./components/Notification-message";
import Section from "./components/Section";
import Statistics from "./components/Statistics";

export default function App() {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const optionsNames = ["good", "neutral", "bad"];

  const onLeaveFeedback = (option) => {
    switch (option) {
      case "good":
        setGood((prevOption) => prevOption + 1);
        break;
      case "neutral":
        setNeutral((prevOption) => prevOption + 1);
        break;
      case "bad":
        setBad((prevOption) => prevOption + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };
  return (
    <div className="App">
      <Section title="Please leave feedback">
        {
          <FeedbackOptions
            options={optionsNames}
            onLeaveFeedback={onLeaveFeedback}
          />
        }
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <NotificationMessage message="No feedback given" />
      )}
    </div>
  );
}

App.propTypes = {
  option: PropTypes.string,
};
