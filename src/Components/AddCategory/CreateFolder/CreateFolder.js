import React, {useState} from 'react';
import { Title,
        Container,
        Table,
        TableHead,
        Tr,
        Th,
        Tbody,
        Td,
        Count,
        TrFolder
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
        }
    })

    const [open, setOpen] = useState(false)

    const openFolder = () => {
        if (open === false) {
            setOpen(!false)
        }else {
            setOpen(!true)
        }
    }
    
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
                        <Tr onClick={openFolder}>
                            <Td>{cat.name}</Td>
                            <Td>{cat.description}</Td>
                        </Tr>
                        {
                            info.filter(cy => cy.folder === cat.name).map(cy => 
                                <TrFolder key={cy.folder} open={open}>
                                    <Td>{cy.description}</Td>
                                    <Td>
                                        <Count>{("0" + Math.floor((cy.time / 3600000) % 60)).slice(-2)}:</Count>
                                        <Count>{("0" + Math.floor((cy.time / 60000) % 60)).slice(-2)}:</Count>
                                        <Count>{("0" + Math.floor((cy.time/ 1000) % 60)).slice(-2)}</Count>
                                    </Td>
                                </TrFolder>
                            )
                        }
                    </Tbody>
                ))
            }
            </Table>
        </ Container>
    )
}
