import * as S from './style'
import { Item } from '../../types/item'

interface Props {
    List: Item
}

const ListItem = ({ List }: Props) => {
    return (
        <S.Container>
            <input
                type="checkbox"
            />
            <label>
                {List.name}
            </label>
        </S.Container>
    )
}

export default ListItem