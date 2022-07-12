import styled from "styled-components"
import SVG_Icon from './Icon'

export const Icon = styled(SVG_Icon)`
    font-size: 1rem;
    color: #fff;
`

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
border: 1px solid #fff;
border-radius: .7rem;
padding: 1rem;
margin: 1rem 0;

button{
    display:flex;
    align-items: center;
    justify-content: center;
    padding: .3rem .5rem;
    margin-right: .5rem;
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    border-radius: .2rem;
    outline: none;
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
        transition: .4s;
    }
}

    input{
    background-color: transparent;
    color: #fff;
    flex: 1;
    border: 0;
    outline: none;
    border-radius: .7rem;
    font-size: 1.2rem;
}
`