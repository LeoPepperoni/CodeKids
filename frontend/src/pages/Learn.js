import React from 'react';
import { useParams } from 'react-router-dom';


const Learn = () => {
   
    const { moduleName } = useParams();


    return (
        <div>
            <div>
                <h1>Learn Content for Module: {decodeURIComponent(moduleName)}</h1>
            </div>
            
        </div>
    );
}

export default Learn;