import React from 'react';
import { useParams } from 'react-router-dom';


const Learn = () => {
    // Use the useParams hook to access the moduleId parameter
    const { moduleId } = useParams();

    return (
        <div>
            <div>
                <h1>Learn Content</h1>
            </div>
            
        </div>
    );
}

export default Learn;