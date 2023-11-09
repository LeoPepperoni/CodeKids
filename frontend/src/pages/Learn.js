import React from 'react';
import { useParams } from 'react-router-dom';


const Learn = () => {
   
    const { moduleID, moduleName } = useParams();


    return (
        <div>
            <div class="path">
                <h3>Learn: Module {moduleID}: {decodeURIComponent(moduleName)}</h3>
            </div>

            <div class="supp-material-list">
                
            </div>

            <div class="question-box">

            </div>
            
        </div>
    );
}

export default Learn;