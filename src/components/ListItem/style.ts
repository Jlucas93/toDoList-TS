import styled from "styled-components"
import SVG_Icon from './IconTrash'

export const IconTrash = styled(SVG_Icon)`
    font-size: 1rem;
    color: #fff;
`
interface ContainerProps {
    done: boolean
}
export const Container = styled.div(({ done }: ContainerProps) => (`
display: flex;
background-color: #20212c;
padding: .7rem;
border-radius: .7rem;
margin: 1rem 0rem;
align-items: center;

input{ 
    width: 1.3rem;
    height: 1.5rem;
    margin-right: 1rem;
}
button{
    padding: .3rem .5rem;
    margin-left: auto;
    background-color: transparent;
    color: #fff;
    border: 1px solid transparent;
    border-radius: .2rem;
    outline: none;
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
        transition: .4s;
    }
}
label{
    color: #FFC0CB;
    text-decoration: ${done ? 'line-through' : 'inital'};
}
`))