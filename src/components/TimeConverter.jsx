import React from "react";

const TimeConverter = ({ timestamp }) => {
  const formattedTime = new Date(timestamp).toLocaleString();
  return <p>{formattedTime}</p>;
};

export default TimeConverter;
