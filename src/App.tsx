import { useState, useCallback } from 'react'
import Listitem from './components/ListItem'
import AddItem from './components/AddItem'
import * as S from './styles'

interface Item {
  id: number,
  name: String,
  done: boolean,
}
function App() {
  //States
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Codar', done: false },
    { id: 2, name: 'Estudar', done: false },
  ])
  //Callbacks
  const AddTask = (taskName: String) => {
    
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
    console.log(list)
  }
  // Render
  return (
    <S.Container>
      <>

        <S.Area>
          <S.Header>
            Lista de tarefas
          </S.Header>

          <AddItem
            Click={AddTask}
          />

          {list.map((list, index) => (
            <Listitem
              key={index}
              List={list}
            />
          ))}

        </S.Area>
      </>
    </S.Container>

  )
}

export default App
