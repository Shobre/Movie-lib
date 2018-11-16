import React from "react";
import './Input.css';

export const Input = ({ text, onChange, disabled }) => (
    <input
        onChange={onChange}
        disabled={disabled}
        className="Input"
    >
        {text}
    </input>
);