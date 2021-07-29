import styled from "styled-components";

export const Title = styled.h3`

`

export const Container = styled.div`
    width: 80%;
    margin: 5rem auto;
    height: 80%;
    overflow-y: scroll;
    ::-webkit-scrollbar { 
        display: none; 
    }
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    overflow: hidden;   
`

export const TableHead = styled.thead`
`

export const Tr = styled.tr`

`

export const Th = styled.th`
    border-bottom: 2px solid #F5F5F5;
    padding: 10px;  
    background-color: #fff;
`

export const Tbody = styled.tbody`
    cursor: pointer;

    &:nth-child(even) {
        background-color: #F5F5F5;
    }
`

export const Td = styled.td`
    padding: 10px;
    border-bottom: 2px solid #F5F5F5;
`

