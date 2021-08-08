import React from 'react';
import { Folders } from './Folders';
import { Title,
        Container,
        Table,
        TableHead,
        Tr,
        Th,
        } from './FolderStyle';

export const TableFoulders = ({categories, cycle}) => {

    const folders = categories.map(cat => {
        return {
            name: cat[0],
            description: cat[1],
        }
    })

    const info = cycle.map(cy => {
        return {
            description: cy[0],
            folder: cy[1],
            time: cy[2],
            pages: cy[3]
        }
    })
    
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
                    <Folders 
                    info={info}
                    categorie={cat.name}
                    catDescription={cat.description}
                    />
                ))
            }
            </Table>
        </ Container>
    )
}
