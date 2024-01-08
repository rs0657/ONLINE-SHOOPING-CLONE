// Buttonpannel.js
import React from 'react';
import './Imagegallery.css';

export default function Buttonpannel(props) {
    function handleClick(status) {
        props.onStatusChange(status);
    }

    return (
        <div>
            <button className="ALL" onClick={() => handleClick('all')}>ALL</button>
            <button className="LAPTOP" onClick={() => handleClick('laptop')}>LAPTOP</button>
            <button className="MOBILE" onClick={() => handleClick('mobile')}>MOBILE</button>
            <button className="DESKTOP" onClick={() => handleClick('desktop')}>DESKTOP</button>
        </div>
    );
}
