import React, { useState, useEffect } from 'react';
import './Dashboard.css';

import { Link, useHistory } from 'react-router-dom'; 

const Dashboard = () => {

  // Sample data for modules (you can replace it with data from your database)
  const modules = [
    { id: 1, name: "Variables & Data Types", completed: 8 },
    { id: 2, name: "Loops", completed: 5 },
    { id: 3, name: "Conditionals", completed: 7 },
    { id: 4, name: "Functions & Procedures", completed: 10 },
    { id: 5, name: "Input & Output", completed: 3 },
  ];

  const constructPath = (moduleId, moduleName) => {
    return `/learn${moduleId}/${encodeURIComponent(moduleName)}`;
  };


  return (
    <div>
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
            <Link to="/testall">
              <button className="branded-long-button">Test All</button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
