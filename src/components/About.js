import React from "react";
import './About.css';

function About() {
    return (
        <div className="about">
            <div className='max-width'>
                <div className='title'>About Me</div>
                <div className='about-content'>
                    <div className='about-text'>I am a student at Oregon State University, currently studying to obtain my Bachelors of Science
                        in Computer Science & Engineering. I initially started college studying Kinesiology, going off of my passion for
                        exercise & health, but then it all changed when one winter break I decided to make a discord bot for my friends and I. While
                        making this bot, doing the research, debugging, and just building something people could use, I fell in love with the field of
                        computer science. That summer I switched majors and never looked back.</div>
                    <div className='about-text'>I have read and researched many different avenues my future career could go down, but being raised in a construction family, I always figure things out
                        by using my own two hands. With this being said, I am currently looking for opportunities to experience the world of software engineering and development
                        with my primary areas being in cloud development and full stack development. While these might be my focus points,
                        all opportunities are welcome and desired. </div>
                    <div className='about-text'>Please feel free to contact me using the contact form below!</div>
                </div>
            </div>
        </div>
    );
}

export default About;