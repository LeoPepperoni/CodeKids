import React from 'react';
import { useParams } from 'react-router-dom';


const Test = () => {
    // Use the useParams hook to access the moduleId parameter
    const { moduleId } = useParams();

    return (
        <div>
            <div>
                <h1>Test Content</h1>
            </div>
            
        </div>
    );
}

export default Test;