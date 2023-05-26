import React from "react";

// styles
import "../../styles/components.css";

const TextInput = ({
  icon,
  placeholder,
  name,
  value,
  setValue,
  errorMessage,
}) => {
  return (
    <div className="input-wrap">
      <div className="input">
        <img src={icon} />

        <input
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
      </div>

      {errorMessage && <span className="warning">{errorMessage}</span>}
    </div>
  );
};

export default TextInput;
