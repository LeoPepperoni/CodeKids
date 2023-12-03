import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom';

export const useAddQuestion = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const addQuestion = async (question, answer, module, answerChoice1, answerChoice2, answerChoice3, position, hint) => {
      setIsLoading(true)
      setError(null)

      //TODO: Update with correct URL
      const response = await fetch('/api/question/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: 
            JSON.stringify({ 
              question, 
              answer, 
              module, 
              answerChoice1, 
              answerChoice2, 
              answerChoice3,
              position, 
              hint 
            })
          })
      const json = await response.json()
      const form = document.getElementById('add-form')
      if (!response.ok) {
          setIsLoading(false)
          setError(json.error)
      }
      if (response.ok) {
          // Trigger success modal

          // update loading state
          setIsLoading(false)
          form.clear()
      }
  }

  return { addQuestion, isLoading, error }
}