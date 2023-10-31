import React from 'react';

{/* module-list, module-data, module-btns need to be set up to be 1/3 of the page horizontally so
    each module has its own "module-data" and all 3 buttons (learn, practice, test) */}

const Dashboard = () => {
    return (
        <div>
            <div>
                <h2 className="module-title">print("Welcome User")</h2>
            </div>

            <div className="module-list">
                <ul>
                    <li>Module 1: Variables & Data Types</li>
                    <li>Module 2: Loops</li>
                    <li>Module 3: Conditionals</li>
                    <li>Module 4: Functions & Procedures</li>
                    <li>Module 5: Input & Output</li>
                </ul>
            </div>

            {/* Need to get data from database for these list elements */}
            <div className="module-data">
                <ul>
                    <li>10/10</li>
                    <li>10/10</li>
                    <li>10/10</li>
                    <li>10/10</li>
                    <li>10/10</li>
                </ul>
            </div>

            <div className="module-btns">
                <ul>
                    <li>
                        <button className="learn-btn" id="mod1-learn-btn">Learn</button>
                        <button className="practice-btn" id="mod1-practice-btn">Practice</button>
                        <button className="test-btn" id="mod1-test-btn">Test</button>
                    </li>
                    <li>
                        <button className="learn-btn" id="mod2-learn-btn">Learn</button>
                        <button className="practice-btn" id="mod2-practice-btn">Practice</button>
                        <button className="test-btn" id="mod2-test-btn">Test</button>
                    </li>
                    <li>
                        <button className="learn-btn" id="mod3-learn-btn">Learn</button>
                        <button className="practice-btn" id="mod3-practice-btn">Practice</button>
                        <button className="test-btn" id="mod3-test-btn">Test</button>
                    </li>
                    <li>
                        <button className="learn-btn" id="mod4-learn-btn">Learn</button>
                        <button className="practice-btn" id="mod4-practice-btn">Practice</button>
                        <button className="test-btn" id="mod4-test-btn">Test</button>
                    </li>
                    <li>
                        <button className="learn-btn" id="mod5-learn-btn">Learn</button>
                        <button className="practice-btn" id="mod5-practice-btn">Practice</button>
                        <button className="test-btn" id="mod5-test-btn">Test</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;