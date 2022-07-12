import { useState } from 'react';
import * as S from './style'

export const AddArea = () =>{
    //States
    const [inputValue, setInputValue] = useState('')
    //Render
    return(
        <S.Container>
            +
            <input
            type="text"
            placeholder="Adicionar nova tarefa"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            />
        </S.Container>
    )
}

export default AddArea