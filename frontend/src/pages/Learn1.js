import React from 'react';
import YouTube from 'react-youtube';
import './Learn.css';
import { useParams } from 'react-router-dom';


const Learn1 = () => {
    const { moduleID, moduleName } = useParams();
    const videoId = 'OSyjOvFbAGI'; 
    document.title = `Learn - Module 1`

    return (
        <div>
            <div class="path centered-learn-header">
                <h4>Module 1: {decodeURIComponent(moduleName)} - Learn</h4>
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
                    <a className="article-link" href="https://www.geeksforgeeks.org/variables-in-c/?ref=lbp" target="_blank" rel="noopener noreferrer">
                        Variables in C - GeeksForGeeks
                    </a>
                
                    <a className="article-link" href="https://www.geeksforgeeks.org/data-types-in-c/" target="_blank" rel="noopener noreferrer">
                        Data Types in C - GeeksForGeeks
                    </a>

                </div>
            </div>

            
            
        </div>
    );
}

export default Learn1;