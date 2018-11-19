import React from "react";
import "./PrevPage.css";
import { Link } from "react-router-dom";

export const PrevLink = ( props ) => (
  <Link className="PrevLink" to={ props.to }>
    {props.children}
  </Link>
);
