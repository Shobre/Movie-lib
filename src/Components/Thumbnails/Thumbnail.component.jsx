import React from "react";
import './Thumbnail.css'

export const Thumbnail = ({ Key, Title, Url, Id, Type, onClick }) => (
    <div key={Key} className="Thumbnail" type={Type} onClick={onClick}>
        <h1>{Title}</h1>
        <img src={Url} alt="" />
        <p>{Id}</p>
    </div>
);