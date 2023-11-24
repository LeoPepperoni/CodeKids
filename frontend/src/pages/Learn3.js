import React from 'react';
import YouTube from 'react-youtube';
import './Learn.css';
import { useParams } from 'react-router-dom';


const Learn3 = () => {
   
    const { moduleID, moduleName } = useParams();
    const videoIdIfStatements = 'xyQrVEFz9kw'; 
    const videoIdSwitchStatements = 'tjd8fQw5HTA';


    return (
        <div>
            <div class="path">
                <h4>Module {moduleID}: {decodeURIComponent(moduleName)} - Learn</h4>
            </div>

            <div class="learn-container">
                <div className="video-container">
                    <iframe
                        width="640"
                        height="360"
                        src={`https://www.youtube.com/embed/${videoIdIfStatements}`}
                        title="YouTube Video"
                        allowFullScreen
                    ></iframe>

                    <iframe
                        width="640"
                        height="360"
                        src={`https://www.youtube.com/embed/${videoIdSwitchStatements}`}
                        title="YouTube Video"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="link-container">
                    <p>Links go here</p>
                </div>
            </div>

            
            
        </div>
    );
}

export default Learn3;