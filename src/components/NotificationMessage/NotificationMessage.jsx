import React from "react";
import PropTypes from "prop-types";
import s from "./NotificationMessage.module.css";

export default function NotificationMessage({ message }) {
  return <b className={s.message}>{message}</b>;
}

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
