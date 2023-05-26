import React from "react";

// styles
import "../../styles/components.css";

const TextButton = ({ title, onClick }) => {
  return (
    <button className="text-button" onClick={onClick}>
      {title}
    </button>
  );
};

export default TextButton;
