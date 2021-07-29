import React, { useEffect } from 'react';
import { Title,
        Container,
        Table,
        TableHead,
        Tr,
        Th,
        Tbody,
        Td,
        } from './FolderStyle';

export const TableFoulders = ({categories, cycle}) => {

    const folders = categories.map(cat => {
        return {
            name: cat[0],
            description: cat[1]
        }
    })

    const info = cycle.map(cy => {
        return {
            description: cy[0],
            folder: cy[1],
            time: cy[2]
        }
    })

    console.log(info);
    
    return (
        <Container>
            <Title>Your Books</Title>
            <Table>
                <TableHead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Author</Th>
                    </Tr>
                </TableHead>
            {
                folders.map(cat => (  
                    <Tbody key={cat.name}>
                        <Tr>
                            <Td>{cat.name}</Td>
                            <Td>{cat.description}</Td>
                        </Tr>
                        {
                            info.map(cy => (
                                <Tr>
                                    <Td>{cy.description}</Td>
                                    <Td>{cy.time}</Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                ))
            }
            </Table>
        </ Container>
    )
}
