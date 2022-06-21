import styled from "styled-components";
import Button from "./Button";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    flex-direction: ${props => props.flexDirection};
    width: ${props => props.width};
    height: ${props => props.height};
`;//обьявление контейнера. в нем все находится

export const Temp = styled.div`
    border: 1px solid green;
    width: 100px;
    height: 100px;
`;//болванка

export const BasicStyle = styled.div`
    color: red;
    border: 1px solid blue;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100px;
`;//стандартный стиль

export const StyleWithProps = styled.button`
    background-color: ${props => props.backgroundColor};
    cursor: pointer;
`;//управление свойствами через пропсы
//в чем отличие props => props.backgroundColor и (props) => { props.backgroundColor }

export const Animation = styled.button`
    border: 1px solid black;
    width: 100px;
    height: 100px;
    background-color: blue;

    &:hover{
        background-color: red;
    }
`;//анимирование и использование стандартных свойств css

export const Parent = styled.div`
    border: 2px solid black;
    & div{//важен пробел между & и div
        background-color: blue;
    }
`;//управление детьми

export const StyledButton = styled(Button)`
    border: 2px solid black;
    & div{//важен пробел между & и div
        background-color: blue;
    }
`;//управление детьми