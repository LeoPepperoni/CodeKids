import React, { useState, useEffect } from 'react';
import './Dashboard.css';

import { Link } from 'react-router-dom'; 

const Dashboard = () => {
  // Sample data for modules (you can replace it with data from your database)
  const modules = [
    { id: 1, name: "Variables & Data Types", completed: 8 },
    { id: 2, name: "Loops", completed: 5 },
    { id: 3, name: "Conditionals", completed: 7 },
    { id: 4, name: "Functions & Procedures", completed: 10 },
    { id: 5, name: "Input & Output", completed: 3 },
  ];

  // Function to calculate completion fraction
  const calculateFraction = (completed) => `${completed}/10`;

  return (
    <body>
      <h2 className="module-title1">Welcome User!</h2>
      <div className="module-list">
        <ul>
          {modules.map((module) => (
            <ul className="module-component" key={module.id}>
              <h3 className="module-title">Module {module.id}: {module.name}</h3>
              <div id="module-fraction">{calculateFraction(module.completed)}
              <div className="module-buttons">

              <Link to={`/learn/${module.id}/${encodeURIComponent(module.name)}`}>
                <button className="learn-btn" id={`mod${module.id}-learn-btn`}>Learn</button>
              </Link>

              <Link to={`/practice/${module.id}/${encodeURIComponent(module.name)}`}>
                <button className="practice-btn" id={`mod${module.id}-practice-btn`}>Practice</button>
              </Link>

              </div>
              </div>
            </ul>
          ))}
        </ul>
      </div>
    </body>
  );
};

export default Dashboard;
