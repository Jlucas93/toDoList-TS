import { useState } from 'react'
import * as S from './style'

interface Item {
    id: number,
    name: String,
    done: boolean,
}
interface Props {
    List: Item
}
const ListItem = ({ List }: Props) => {
    //States
    const [isChecked, setIsChecked] = useState(List.done)
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
        </S.Container>
    )
}

export default ListItem