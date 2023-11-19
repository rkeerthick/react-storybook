import React from "react";
import "./Input.css";

const Input = ({
  variant = "small",
  children,
  type = "text",
  placeholder = "Enter text...",
  ...rest
}) => {
  return (
    <input
      className={`input ${variant} ${rest}`}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
