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
                <h4>Module 3: {decodeURIComponent(moduleName)} - Learn</h4>
            </div>

            <div class="learn-container">
                <div className="video-container">
                    <div className="video-frame">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoIdIfStatements}`}
                            title="YouTube Video"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="video-frame">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoIdSwitchStatements}`}
                            title="YouTube Video"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <div className="link-container">
                    <a className="article-link" href="https://www.geeksforgeeks.org/decision-making-c-cpp/?ref=lbp" target="_blank" rel="noopener noreferrer">
                        Decision Making in C - GeeksForGeeks
                    </a>

                    <a className="article-link" href="https://www.geeksforgeeks.org/c-if-statement/?ref=lbp" target="_blank" rel="noopener noreferrer">
                        C If Statements - GeeksForGeeks
                    </a>

                    <a className="article-link" href="https://www.geeksforgeeks.org/c-if-else-statement/?ref=lbp" target="_blank" rel="noopener noreferrer">
                        C If Else Statements - GeeksForGeeks
                    </a>

                    <a className="article-link" href="https://www.geeksforgeeks.org/c-switch-statement/?ref=lbp" target="_blank" rel="noopener noreferrer">
                        Switch Statements in C - GeeksForGeeks
                    </a>
                </div>
            </div>

            
            
        </div>
    );
}

export default Learn3;