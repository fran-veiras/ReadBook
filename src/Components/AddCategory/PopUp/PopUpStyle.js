import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    right: 0px;
    top: 0px;
    background: rgba(0, 0, 0, 0.40);
    display: ${({newCategory}) => (newCategory ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
`

export const Request = styled.div`
    width: 530px;
    height: 230px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background: #fff;
    padding: 1.2rem;
    padding-bottom: 2rem; 
`

export const Title = styled.h3`
    
`

export const Name = styled.input`
    border: 0; 
    padding: 7px 0;
    width: 30%;
    border-bottom: 1px solid #ccc;
    &:focus {
        outline: none;
    }
`

export const Delete = styled.a`
    background-color: #F5F5F5;
    border: none;
    color: black;
    padding: 8px 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
`

export const Accept = styled.a`
    background-color: #71BB65;
    border: none;
    color: black;
    padding: 8px 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 1rem;
`


