import React from 'react';
import YouTube from 'react-youtube';
import './Learn.css';
import { useParams } from 'react-router-dom';


const Learn5 = () => {
   
    const { moduleID, moduleName } = useParams();
    const videoId = 'xOIVXR35aI4'; 


    return (
        <div>
            <div class="path">
                <h4>Module 5: {decodeURIComponent(moduleName)} - Learn</h4>
            </div>

            <div class="learn-container">
                <div className="video-container">
                    <iframe
                        width="640"
                        height="360"
                        src={`https://www.youtube.com/embed/${videoId}`}
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

export default Learn5;