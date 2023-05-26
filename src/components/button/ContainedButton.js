import React from "react";

// styles
import "../../styles/components.css";

const ContainedButton = ({ title, onClick }) => {
  return (
    <button className="contained-button" onClick={onClick}>
      {title}
    </button>
  );
};

export default ContainedButton;
