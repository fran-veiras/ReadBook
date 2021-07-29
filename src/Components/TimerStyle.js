import styled from "styled-components";

export const Container = styled.div`
    flex: 20%;
    background: #F5F5F5;
`

export const Title = styled.h1`
    margin: 0 auto;
    padding-top: 2rem;
    text-align: center;
`

export const TimerCircle = styled.div`
    width: 150px;
    height: 150px;
    margin: 1rem auto;
    margin-bottom: 2rem;
    background: #fff;
    border-radius: 50%;
    box-shadow: inset 0px 2px 6px -3px #000;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Count = styled.h2`

`

export const Start = styled.a`
    width: 30%;
    margin: 1rem auto;
    cursor: pointer;
    display: ${({ timeOn }) => (timeOn ? 'none' : 'block')};
`

export const Stop = styled.a`
    width: 30%;
    margin: 1rem auto;
    cursor: pointer;
    border-radius: 5px;
    display: ${({ timeOn }) => (timeOn ? 'block' : 'none')};
`

export const Save = styled.a`
    width: 30%;
    display: block;
    margin: 1rem auto;
    cursor: pointer;
`

export const Reset = styled.a`
    width: 30%;
    display: block;
    margin: 1rem auto;
    cursor: pointer;
    text-align: center;
`


