import React, { useState } from 'react'

const Input = (props: {onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, value: string}) => {
  return <input onChange={props.onChange} value={props.value}/>
}
export const useInput = () => {
  const [inputState, updateState] = useState(new Array(1000).fill(''))
    const view = (
      <>
        {inputState.map((_, id,) => {
          const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const copyInputState = [...inputState]
            copyInputState[id] = e.target.value
            updateState(copyInputState)
          }
          return <Input onChange={handleInputChange} value={inputState[id]} key={`bad-${id}`}/>
        })}
      </>
    )
  return { inputState, view }
}

export const Bad =  () => {
  const { view: viewPartial } = useInput()
  return <>{viewPartial}</>
}
