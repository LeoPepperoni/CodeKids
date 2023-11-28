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
                <div className='about-card-text'>Each module features a range of resources, including insightful YouTube videos and comprehensive articles, chosen to provide in-depth coverage of each topic. These external 
                resources are handpicked for their ability to break down complex coding concepts into understandable segments. Perfect for beginners and those looking to refine their skills, 
                our curated learning materials cater to diverse learning styles, ensuring everyone has access to a rich and effective learning experience.</div>
              </div>
              <div className='about-card branded-shadow'>
                <div className='about-card-header'>Practice 🏋️‍♀️</div>
                <div className='about-card-text'>Put your coding knowledge to the test with our interactive practice section. Here, you'll find a variety of multiple-choice questions 
                that are not only challenging but also insightful. Struggling with a question? Our unique "hint" function is here to guide you through. It's a perfect way to reinforce 
                what you've learned, identify areas for improvement, and build confidence in your coding abilities, all at your own pace.</div>
              </div>
              <div className='about-card branded-shadow'>
                <div className='about-card-header'>Test 👩🏽‍💻</div>
                <div className='about-card-text'>Our testing feature invites you to tackle comprehensive multiple-choice tests, offering immediate scores upon submission. These tests are thoughtfully designed to allow you to evaluate your grasp of the 
                material in a practical format. This is an excellent way to track your learning journey, celebrate your milestones, and pinpoint areas that might require additional focus. 
                Embrace the challenge and see how far you've come in your coding adventure!</div>
              </div>
            </div>
        </div>
    );
}

export default About;