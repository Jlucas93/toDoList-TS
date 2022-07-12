import { useState } from 'react'
import Listitem from './components/ListItem'
import * as S from './styles'

interface Item {
  id: number,
  name: string,
  done: boolean,
}
function App() {
  //States
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Codar', done: true },
    { id: 2, name: 'Estudar', done: false },
  ])

  //Render
  return (
    <>
      <S.Container>
        <S.Area>
          <>
            <S.Header>
              Lista de tarefas
            </S.Header>

            {list.map((list, index) => (
              <Listitem
                key={index}
                List={list}
              />
            ))}

          </>
        </S.Area>
      </S.Container>
    </>
  )
}

export default App
