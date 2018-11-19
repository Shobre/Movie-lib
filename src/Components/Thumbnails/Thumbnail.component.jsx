import React from "react";
import './Thumbnail.css'
import {Link} from 'react-router-dom'

export const Thumbnail = ({ Key, Title, Url, Year, Type, onClick, to }) => (
    <Link key={Key} to={to}>
    <div className="Thumbnail" type={Type} onClick={onClick}>
        <img src={Url} alt="No poster found!" />
        <h1>{Title}</h1>
        <p>{Year}</p>
    </div>
    </Link >
);