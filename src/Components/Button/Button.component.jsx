import React from "react";
import './Button.css'

export const Button = ({ text, onClick, disabled }) => (
  <div
    disabled={disabled}
    onClick={onClick}
    className="Button"
  >
    {text}
  </div>
);

export const Toggle = ({ onClick, disabled, type}) => (
  <div
    disabled={disabled}
    onClick={onClick}
    className={type}
  >
    {type}
  </div>
);