import { useState, useRef } from 'react';
import * as S from './style'

interface props{
  Click: (taskName: String) => void;
}

export const AddArea = ({Click}: props) => {
  // States
  const [inputValue, setInputValue] = useState('')
  //Refs
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = (event: String) => {
    if(inputValue != ''){
      Click(event)
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
        onChange={() => handleChange()}
      />
    </S.Container>
  )
}

export default AddArea