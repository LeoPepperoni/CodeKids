import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className='logo-container'>
                <div className='branded-logo branded-shadow'>CodeKids</div>
            </div>
            <div className='about-container'>
                <div className='about-header'>Learn, Practice, & Test Your&nbsp;</div>
                <div className='about-header branded-underline'>Knowledge</div>
            </div>
            <div className='about-main-text-container'>
              <div className='about-main-text'>Our mission is to empower the next generation of software engineers through our distinctive approach to acquiring essential software skills.</div>
            </div>
            <div className='card-container'>
              <div className='about-card branded-shadow'>
                <div className='about-card-header'>Learn 🔍</div>
                <div className='about-card-text'>Sample text about using learn this is really long text pls change</div>
              </div>
              <div className='about-card branded-shadow'>
                <div className='about-card-header'>Practice 🏋️‍♀️</div>
                <div className='about-card-text'>Sample text about using Practice this is really long text pls change</div>
              </div>
              <div className='about-card branded-shadow'>
                <div className='about-card-header'>Test 👩🏽‍💻</div>
                <div className='about-card-text'>Sample text about using Test this is really long text pls change</div>
              </div>
            </div>
        </div>
    );
}

export default About;