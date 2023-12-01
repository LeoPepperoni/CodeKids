import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className='logo-container'>
              <Link className='branded-logo-link' to="/">
                <div className='branded-logo branded-shadow' title='Return home'>CodeKnights</div>
              </Link>
            </div>
            <div className='about-container'>
                <div className='about-header'>Learn, Practice, & Test Your&nbsp;</div>
                <div className='about-header branded-underline'>Knowledge</div>
            </div>
            <div className='about-main-text-container'>
              <div className='about-main-text'>Our mission is to prepare the next generation of UCF computer science students by learning fundamental C programming language principles ASAP.</div>
            </div>
            <div className='card-container'>
              <div className='about-card branded-shadow'>
                <div className='about-card-header'>Learn 🔍</div>
                <div className='about-card-text'>Each module features a range of resources, including insightful YouTube videos and comprehensive articles, chosen to provide in-depth coverage of each topic.</div>
              </div>
              <div className='about-card branded-shadow'>
                <div className='about-card-header'>Practice 🏋️‍♀️</div>
                <div className='about-card-text'>Put your coding knowledge to the test with our interactive practice section. Here, you'll find a variety of multiple-choice questions 
                that are not only challenging but also insightful.</div>
              </div>
              <div className='about-card branded-shadow'>
                <div className='about-card-header'>Test 👩🏽‍💻</div>
                <div className='about-card-text'>Our testing feature invites you to tackle comprehensive multiple-choice tests, offering immediate scores upon submission. These tests are thoughtfully designed to allow you to evaluate your grasp of the 
                material in a practical format.</div>
              </div>
            </div>
        </div>
    );
}

export default About;