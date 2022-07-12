import styled from "styled-components"

type ContainerProps = {
    done: boolean
}
export const Container = styled.div(({ done }: ContainerProps) => (
    `
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

label{
    color: #FFC0CB;
    text-decoration: ${done ? 'line-through' : 'inital'};
}
`
))