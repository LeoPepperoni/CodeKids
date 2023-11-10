import React from 'react';
import { useParams } from 'react-router-dom';


const Learn = () => {
   
    const { moduleID, moduleName } = useParams();


    return (
        <div>
            <div class="path">
                <h4>Module {moduleID}: {decodeURIComponent(moduleName)} - Learn</h4>
            </div>

            <div class="supp-material-list">
                
            </div>

            <div class="question-box">

            </div>
            
        </div>
    );
}

export default Learn;