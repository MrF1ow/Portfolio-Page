import React from "react";
import './RoundedCard.css';

function RoundedCard(props) {
    return (
        <a href={props.link} className="rounded-card">
            <div className="rounded-card-header">
                <div className="rounded-card-title">
                    {props.title}
                </div>
                <div className="rounded-card-icon">
                    {props.icon}
                </div>
            </div>
            <div className="rounded-card-description">
                {props.description}
            </div>
        </a>
    );
}

export default RoundedCard;