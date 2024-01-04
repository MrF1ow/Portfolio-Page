import React from 'react';
import pfp from '../assets/images/pfp.jpg';
import { TypeAnimation } from 'react-type-animation';
import typing_sequence from '../data/typing_sequence';
import './Home.css';

function Home() {
    return (
        <div className="home" id="home">
            <div className="max-width">
                <div className="home-content">
                    <div className="image-pfp">
                        <img src={pfp} alt="Profile Picture" />
                    </div>
                    <div className="text-box">
                        <div className="text-1">Hey, I'm Ethan Flow</div>
                        <div className="text-2"><TypeAnimation sequence={typing_sequence} speed={40} repeat={Infinity} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;