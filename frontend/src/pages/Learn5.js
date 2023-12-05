import React from 'react';
import YouTube from 'react-youtube';
import './Learn.css';
import { useParams } from 'react-router-dom';


const Learn5 = () => {
   
    const { moduleID, moduleName } = useParams();
    const videoId = 'xOIVXR35aI4'; 
    document.title = `Learn - Module 5`

    return (
        <div>
            <div class="path centered-learn-header">
                <h4>Module 5: {decodeURIComponent(moduleName)} - Learn</h4>
            </div>

            <div class="learn-container branded-shadow">
                <div className="video-container">
                    <div className="video-frame">
                        <iframe
                            frameBorder="0"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="YouTube Video"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <div className="link-container">
                    <a className="article-link" href="https://www.geeksforgeeks.org/basic-input-and-output-in-c/?ref=lbp" target="_blank" rel="noopener noreferrer">
                        Basic Input/Output in C - GeeksForGeeks
                    </a>

                    <a className="article-link" href="https://www.geeksforgeeks.org/format-specifiers-in-c/?ref=lbp" target="_blank" rel="noopener noreferrer">
                        Format Specifiers in C - GeeksForGeeks
                    </a>
                </div>
            </div>

            
            
        </div>
    );
}

export default Learn5;