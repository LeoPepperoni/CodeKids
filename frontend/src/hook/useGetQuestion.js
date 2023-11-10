import { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for API requests

export const useGetQuestion = (questionId) => {
    const [question, setQuestion] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to fetch a single question by its ID
    const fetchQuestion = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get(`/api/questions/${questionId}`);
            setQuestion(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    };

    // Use useEffect to fetch the question when the component mounts or when questionId changes
    useEffect(() => {
        if (questionId) {
            fetchQuestion();
        }
    }, [questionId]);

    return { question, isLoading, error };
};

