import React, { useState } from 'react'
import type { Item } from 'App'
import * as S from './style'
interface Props {
  List: Item
  remove: (id: Number) => void
}
const ListItem: React.FC<Props> = ({ List, remove }) => {
  //States
  const [isChecked, setIsChecked] = useState(List.done)

  const handelDelete = (element: Number) => {
    remove(element)
  }
  //Render
  return (
    <S.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked)
        }}
      />
      <label>
        {List.name}
      </label>
      <button
        onClick={() => handelDelete(List.id)}
      >
        <S.IconTrash/>
      </button>
    </S.Container>
  )
}

export default ListItem