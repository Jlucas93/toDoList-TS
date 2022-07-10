import { useState } from 'react'
import * as S from './style'
import { Item } from '../../types/item'

interface Props {
    List: Item
}

const ListItem = ({ List }: Props) => {
    //States
    const [isChecked, setIsChecked] = useState(List.done)

    //Render
    return (
        <S.Container>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => {
                    setIsChecked(e.target.checked)
                    console.log(isChecked)
                    }}
            />
            <label>
                {List.name}
            </label>
        </S.Container>
    )
}

export default ListItem