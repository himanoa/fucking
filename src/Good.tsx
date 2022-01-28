import React, { useState, useCallback } from 'react'

export const Input = () => {
  const [inputState, updateState] = useState('')
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updateState(e.target.value)
  }, [updateState])

  return <input value={inputState} onChange={handleChange} />
}

export const Good = () => {
  return (
    <>
    {
      new Array(1000).fill('').map((_, id) => {
        return <Input key={id} />
      })
    }
    </>
  )
}
