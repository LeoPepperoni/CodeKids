import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useDeleteQuestion = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const deleteQuestion = async (position, module) => {
      setIsLoading(true)
      setError(null)
 
      const response = await fetch('/api/question/delete', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: 
            JSON.stringify({ 
              position,
              module
            })
          })
      const json = await response.json()

      if (!response.ok) {
          setIsLoading(false)
          setError(json.error)
      }
      if (response.ok) {
          setIsLoading(false)
      }
  }

  return { deleteQuestion, isLoading, error }
}