import { useState, useRef } from 'react';
import * as S from './style'

export const AddArea = () => {
  // States
  const [inputValue, setInputValue] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {

    console.log(inputValue)
  }
  const handleChange = () => {
    if (inputRef.current)
      setInputValue(inputRef.current.value)
  }
  // Render
  return (
    <S.Container>
      <button
        onClick={() => handleClick()}
      >
        <S.Icon />
      </button>
      <input
        type="text"
        placeholder="Adicionar nova tarefa"
        ref={inputRef}
        onChange={() => handleChange()}
      />
    </S.Container>
  )
}

export default AddArea