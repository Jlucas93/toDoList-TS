import React, { useState, useRef } from 'react';
import * as S from './style'

interface Props {
  click: (taskName: String) => void
}
const AddArea: React.FC<Props> = ({click}) => {
  // States
  const [inputValue, setInputValue] = useState('')
  //Refs
  const inputRef = useRef<HTMLInputElement>(null)
  //Callbacks
  const handleClick = (event: String) => {
    if (inputValue != '') {
      click(event)
      setInputValue('')
    }
  }
  const handleChange = () => {
    if (inputRef.current)
      setInputValue(inputRef.current.value)
  }
  // Render
  return (
    <S.Container>
      <button
        onClick={() => handleClick(inputValue)}
      >
        <S.Icon />
      </button>
      <input
        type="text"
        placeholder="Adicionar nova tarefa"
        ref={inputRef}
        value={inputValue}
        onChange={() => handleChange()}
      />
    </S.Container>
  )
}

export default AddArea