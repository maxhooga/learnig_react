import styled from "styled-components";

export const ListStyle = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh-10px);
`;

export const AcountIntrests = styled.div`
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 600px;
    max-height: 600px;
    
    overflow: scroll;
`;

export const IntrestStyle = styled.div`
    position: relative;
    width: ${props => props.imageWidth};
    height: ${props => props.imageHeight};
    border-radius: 10px;
    margin: 5px;

    border: ${props => props.choosen};
    transition: border 1s;

    & .image_img{
        width: ${props => props.imageWidth};
        height: ${props => props.imageHeight};
        border-radius: 10px;
    }
    & .image_overlay{
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(0, 0, 0, 0.7);
        color: #ffff;
        font-family: 'Quicksand' , sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.25s;
        border-radius: 10px;
    }
    & .image_overlay > *{
        transform: translateY(20px);
        transition: transform 0.25s;
    }
    & .image_overlay:hover{
        opacity: 1;
    }
    & .image_overlay:hover{
        opacity: 1;
    }
    & .image_overlay:hover > *{
        transform: translateY(0);
    }
    & .image_description{
        font-size: 1.25rem;
        padding: 25px;
        text-align: center;
    }
`;
