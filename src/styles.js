import styled from "styled-components";
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";
import Background from './assets/background.png'

export const Container = styled.div`
    background: url(${Background});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
        padding-bottom: 50px;

        h1 {
            text-transform: uppercase;
            font-size: 50px;
            font-weight: bold;
            text-shadow: 2px 2px 5px #003329;
        }
    }
`

export const ToDoList = styled.div`
    background: white;
    border: 3px solid #000;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    padding: 30px 20px;
    border-radius: 10px;
    width: 600px;
    max-width: 80vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 60vh;

    .content {
        display: flex;
        margin-bottom: 50px
    }

    ul {
        flex-grow: 1;
        overflow-y: auto;
        padding: 0;
        margin: 0;
    }
`

export const Input = styled.input`
    font-weight: bold;
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 4px;
    height: 40px;
    margin-right: 30px;
    width: 340px;
    padding-left: 20px;
`

export const Button = styled.button`
    background: #003329;
    border-radius: 5px;
    border: none;
    height: 40px;
    font-size: 17px;
    font-weight: bold;
    line-height: 2px;
    color: white;
    width: 130px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`

export const ListItem = styled.div`  
    background: ${(props) => (props.isFinished ? '#E8FF8B' : '#E4E4E4')};  
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);  
    border-radius: 5px;  
    height: 60px;  
    display: flex;  
    align-items: center;  
    justify-content: space-between;  
    margin-bottom: 30px;  
    padding: 0 15px;  
    width: 500px;  

    li {  
        list-style: none;  
    }  
`;

/* Personalizando os Icones */

export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
    width: 25px;
    height: 25px;
`

export const Check = styled(FcCheckmark)`
    cursor: pointer;
    width: 25px;
    height: 25px;
`