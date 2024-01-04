import React from 'react';
import './Knowledge.css';
import knowledge_data from '../data/knowledge_data.js';
import KnowledgeBox from './KnowledgeBox.js';

function Knowledge() {
    return (
        <div className='knowledge' id='knowledge'>
            <div className='max-width'>
                <div className="title">Knowledge</div>
                <div className="knowledge-content">
                    <KnowledgeBox title={knowledge_data[0].title} text={knowledge_data[0].text} />
                    <KnowledgeBox title={knowledge_data[1].title} text={knowledge_data[1].text} />
                    <KnowledgeBox title={knowledge_data[2].title} text={knowledge_data[2].text} />
                    <KnowledgeBox title={knowledge_data[3].title} text={knowledge_data[3].text} />
                </div>
            </div>
        </div>
    );
}

export default Knowledge;