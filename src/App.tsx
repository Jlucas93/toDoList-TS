import React, { useState } from 'react'
import Listitem from './components/ListItem'
import AddItem from './components/AddItem'
import * as S from './styles'
export interface Item {
  id: number,
  name: String,
  done: boolean,
}
//
function App() {
  //States
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Codar', done: false },
    { id: 2, name: 'Estudar', done: false },
  ])
  //Callbacks
  const addTask = React.useCallback((taskName: String) => {
    setList(state => [
      ...state,
      {
        id: state.length + 1,
        name: taskName,
        done: false
      }
    ])
  }, [])
  const removeTask = React.useCallback((id: Number) => {
    setList(state => state.filter(state => state.id !== id)
    )
  }, [])
  // Render
  return (
    <S.Container>
      <S.Area>
        <S.Header>
          Lista de tarefas
        </S.Header>

        <AddItem
          click={addTask}
        />
        {list.map((list, index) => (
          <Listitem
            key={index}
            List={list}
            remove={removeTask}
          />
        ))}
      </S.Area>
    </S.Container>

  )
}

export default App
