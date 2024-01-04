import React from 'react';
import './KnowledgeBox.css';

function KnowledgeBox(props) {
    return (
        <div className="knowledge-box">
            <div className="knowledge-title">{props.title}</div>
            <div className="knowledge-text">
                {props.text.map((item, index) => (
                    <div className="knowledge-item" key={index}>{item}</div>
                ))}
            </div>
        </div>
    );
}

export default KnowledgeBox;