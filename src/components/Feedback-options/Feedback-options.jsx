// import React from "react";
import React from "react";
import PropTypes from "prop-types";
import s from "./Feedback-options.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map((option) => (
    <button
      key={option}
      className={s.btn}
      type="button"
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
