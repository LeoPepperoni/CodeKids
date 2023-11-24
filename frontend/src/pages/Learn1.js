import React from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';


const Learn1 = () => {
   
    const { moduleID, moduleName } = useParams();
    const videoId = 'OSyjOvFbAGI'; 


    return (
        <div>
            <div class="path">
                <h4>Module {moduleID}: {decodeURIComponent(moduleName)} - Learn</h4>
            </div>

            <div class="learn-container">
                <p>Learn 1 content</p>

                <div className="video-container">
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube Video"
                    allowFullScreen
                ></iframe>
                </div>
            </div>

            
            
        </div>
    );
}

export default Learn1;