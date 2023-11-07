import React from 'react';
import { useParams } from 'react-router-dom';


const Practice = () => {
    // Use the useParams hook to access the moduleId parameter
    const { moduleName } = useParams();

    return (
        <div>
            <div>
                <h1>Practice Content for Module: {decodeURIComponent(moduleName)}</h1>
            </div>
            
        </div>
    );
}

export default Practice;