import React, { useState } from 'react'

export const useInput = () => {
  const [inputState, updateState] = useState(new Array(10000).fill(''))
  const View = () => {
    return (
      <>
        {inputState.map((state, id) => {
          const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            // はやさのためにin placeな書き替えしてる
            inputState[id] = e.target.value
            updateState(inputState)
          }
          return <input onChange={handleInputChange} value={state} key={id}/>
        })}
      </>
    )
  }
  return { inputState, View }
}

export const Bad =  () => {
  const { View } = useInput()
  return <View />
}
