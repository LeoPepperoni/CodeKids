import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { Link, useHistory } from 'react-router-dom'; 

const Dashboard = () => {
  const sessionUserId = sessionStorage.getItem('userId')

  // Sample data for modules (you can replace it with data from your database)
  const modules = [
    { id: 1, name: "Variables & Data Types"},
    { id: 2, name: "Loops"},
    { id: 3, name: "Conditionals"},
    { id: 4, name: "Functions & Procedures"},
    { id: 5, name: "Input & Output"},
  ];

  const constructPath = (moduleId, moduleName) => {
    return `/learn${moduleId}/${encodeURIComponent(moduleName)}`;
  };

  async function moduleCheck(userId, moduleNum) {
    const response = await fetch(`/api/progress/user/getUserModuleProgress/${userId}/${moduleNum}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const json = await response.json()
    
    // sanity check.. I know
    console.log(json.progressExists);

    // return status
    return json.progressExists
  }

  async function moduleCompleted(moduleNum) {
    try {
      let isModuleComplete = await moduleCheck(sessionUserId, moduleNum);
      return isModuleComplete ? true: null;
    } catch (error) {
      console.error('Error fetching module progress:', error);
    }
  }

  async function moduleCompletedText(moduleNum) {
    try {
      let isModuleComplete = await moduleCheck(sessionUserId, moduleNum);
      return isModuleComplete  ? 'Done ✅' : 'Test';
    }catch (error) {
      console.error('Error fetching module progress:', error);
    }
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
                  <button className="learn-button branded-shadow" id={`mod${module.id}-practice-btn`} disabled={moduleCompleted(module.id)}>{moduleCompletedText(module.id)}</button>
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
