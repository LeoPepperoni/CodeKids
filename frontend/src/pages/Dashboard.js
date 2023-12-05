import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { Link, useHistory } from 'react-router-dom'; 

const Dashboard = () => {
  const sessionUserId = sessionStorage.getItem('userId');
  const [error, setError] = useState(null);
  const [modules, setModules] = useState([]);

  document.title = 'CodeKnights | Dashboard'

  useEffect(() => {
      async function fetchModules() {
        const moduleData = [
          { id: 1, name: "Variables & Data Types" },
          { id: 2, name: "Loops" },
          { id: 3, name: "Conditionals" },
          { id: 4, name: "Functions & Procedures" },
          { id: 5, name: "Input & Output" },
        ];

        const modulePromises = moduleData.map(async (module) => {
          const isCompleted = await moduleCheck(sessionUserId, module.id);
          return { ...module, isCompleted };
        });

        try {
          const modulesWithCompletionStatus = await Promise.all(modulePromises);
          setModules(modulesWithCompletionStatus);
        } catch (error) {
          setError(error);
        }
      }

      fetchModules();
    }, [sessionUserId]);

    async function moduleCheck(userId, moduleNum) {
      try {
        const response = await fetch(`/api/progress/user/getUserModuleProgress/${userId}/${moduleNum}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          const json = await response.json();
          setError(json.error);
          return false;
        }

        const json = await response.json();
        console.log(json.progressExists);
        return json.progressExists;
      } catch (error) {
        setError(error);
        return false;
      }
    }
  const constructPath = (moduleId, moduleName) => {
    return `/learn${moduleId}/${encodeURIComponent(moduleName)}`;
  };
  

  function moduleCompletedText(isCompleted) {
    return isCompleted ? 'Done ✅' : 'Test';
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
                  <button className="learn-button branded-shadow" id={`mod${module.id}-practice-btn`} disabled={module.isCompleted ? true : undefined}>{moduleCompletedText(module.isCompleted)}</button>
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
