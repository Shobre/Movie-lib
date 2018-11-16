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

export const Toggle = ({ text, onClick, disabled, toggle}) => (
  <div
    disabled={disabled}
    onClick={onClick}
    className={toggle}
  >
    {text}
  </div>
);