import React from 'react';
import YouTube from 'react-youtube';
import './Learn.css';
import { useParams } from 'react-router-dom';


const Learn2 = () => {
   
    const { moduleID, moduleName } = useParams();
    const videoIdForLoops = 'b4DPj0XAfSg'; 
    const videoIdWhileLoops = 'ufFAFx5Qn3w';


    return (
        <div>
            <div class="path">
                <h4>Module 2: {decodeURIComponent(moduleName)} - Learn</h4>
            </div>

            <div class="learn-container">
                <div className="video-container">
                    <iframe
                        width="640"
                        height="360"
                        src={`https://www.youtube.com/embed/${videoIdForLoops}`}
                        title="YouTube Video"
                        allowFullScreen
                    ></iframe>

                    <iframe
                        width="640"
                        height="360"
                        src={`https://www.youtube.com/embed/${videoIdWhileLoops}`}
                        title="YouTube Video"
                        allowFullScreen
                    ></iframe>
                </div>


                <div className="link-container">
                    <a href="https://www.geeksforgeeks.org/c-loops/" target="_blank" rel="noopener noreferrer">
                        Loops in C - GeeksForGeeks
                    </a>

                    <a href="https://www.geeksforgeeks.org/c-for-loop/?ref=lbp" target="_blank" rel="noopener noreferrer">
                        C For Loop - GeeksForGeeks
                    </a>

                    <a href="https://www.geeksforgeeks.org/c-while-loop/?ref=lbp" target="_blank" rel="noopener noreferrer">
                        C While Loop - GeeksForGeeks
                    </a>
                </div>
            </div>

            
            
        </div>
    );
}

export default Learn2;