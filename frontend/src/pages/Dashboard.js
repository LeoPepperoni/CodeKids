import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { Link, useHistory } from 'react-router-dom'; 

const Dashboard = () => {
  const sessionUserId = sessionStorage.getItem('userId')

  // Sample data for modules (you can replace it with data from your database)
  const modules = [
    { id: 1, name: "Variables & Data Types", isCompleted: moduleCheck(sessionUserId, 1) },
    { id: 2, name: "Loops", isCompleted: moduleCheck(sessionUserId, 2) },
    { id: 3, name: "Conditionals", isCompleted: moduleCheck(sessionUserId, 3) },
    { id: 4, name: "Functions & Procedures", isCompleted: moduleCheck(sessionUserId, 4) },
    { id: 5, name: "Input & Output", isCompleted: moduleCheck(sessionUserId, 5) },
  ];

  const constructPath = (moduleId, moduleName) => {
    return `/learn${moduleId}/${encodeURIComponent(moduleName)}`;
  };

  async function moduleCheck(userId, moduleNum) {
    const response = await fetch(`/api/progress/user/getUserModuleProgress/${userId}/${moduleNum}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      //body: JSON.stringify({ email, password })
    })
    const json = await response.json()
    console.log(json);
  }

  function moduleCompleted() {

  }

  return (
    <div>
            <div className='logo-container'>
              <Link className='branded-logo-link' to="/">
                <div className='branded-logo branded-shadow' title='Return home'>CodeKnights</div>
              </Link>
            </div>
      <div className="module-list">
        <ul>
          {modules.map((module) => (
            <ul className="module-component branded-shadow" key={module.id}>
              <h3 className="module-title">Module {module.id}: {module.name}</h3>
              <div className="module-buttons">

                <Link to={constructPath(module.id, module.name)}>
                  <button
                    className="learn-button branded-shadow" id={`mod${module.id}-learn-btn`}>Learn</button>
                </Link>

                <Link to={`/practice/${module.id}/${encodeURIComponent(module.name)}`}>
                  <button className="learn-button branded-shadow" id={`mod${module.id}-practice-btn`}>Practice</button>
                </Link>

                <Link to={`/test/${module.id}/${encodeURIComponent(module.name)}`}>
                  <button className="learn-button branded-shadow" id={`mod${module.id}-practice-btn`}>Test</button>
                </Link>

              </div>
            </ul>
          ))}
        </ul>
        <div className="all-btn-container">
          <div className="long-btn-1">
            <Link to="/practiceall">
              <button className="branded-long-button">Practice All</button>
            </Link>
          </div>
          <div className="long-btn-2">
            <Link to="/TestAll">
              <button className="branded-long-button">Test All</button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
