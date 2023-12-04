import React from 'react';
import YouTube from 'react-youtube';
import './Learn.css';
import { useParams } from 'react-router-dom';


const Learn4 = () => {
   
    const { moduleID, moduleName } = useParams();
    const videoIdFunctions = 'ou_G7_zodR4'; 
    const videoIdArguments = '7VM571tSKC0';
    const videoIdFunctPrototypes = 'vc9A6HdrTz4';


    return (
        <div>
            <div class="path">
                <h4>Module 4: {decodeURIComponent(moduleName)} - Learn</h4>
            </div>

            <div class="learn-container">
                <div className="video-container">
                    <iframe
                        frameBorder="0"
                        width="640"
                        height="360"
                        src={`https://www.youtube.com/embed/${videoIdFunctions}`}
                        title="YouTube Video"
                        allowFullScreen
                    ></iframe>

                    <iframe
                        frameBorder="0"
                        width="640"
                        height="360"
                        src={`https://www.youtube.com/embed/${videoIdArguments}`}
                        title="YouTube Video"
                        allowFullScreen
                    ></iframe>

                    <iframe
                        frameBorder="0"
                        width="640"
                        height="360"
                        src={`https://www.youtube.com/embed/${videoIdFunctPrototypes}`}
                        title="YouTube Video"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="link-container">
                    <a className="article-link" href="https://www.geeksforgeeks.org/c-functions/?ref=lbp" target="_blank" rel="noopener noreferrer">
                        C Functions - GeeksForGeeks
                    </a>

                    <a className="article-link" href="https://www.geeksforgeeks.org/function-prototype-in-c/?ref=lbp" target="_blank" rel="noopener noreferrer">
                        Function Prototypes in C - GeeksForGeeks
                    </a>
                </div>
            </div>

            
            
        </div>
    );
}

export default Learn4;