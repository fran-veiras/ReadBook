import React, {useState, useEffect} from 'react';
import { Title,
         Container,
         Table,
         TableHead,
         Tr,
         Th,
         Tbody,
        } from './FoulderStyle';

export const TableFoulders = ({categories}) => {

    useEffect(() => {
        getFoulder();
    }, [])
    
    const [foulder, setFoulder] = useState([])
    
    const getFoulder = () => {
        
        if (categories) {
            const foulders = categories.map(cat => {
                return {
                    name: cat[0],
                    description: cat[1]
                }
            })
            
            setFoulder(foulders);
        }
    }
    

    return (
        <Container>
            <Title>Your Books</Title>
            <Table>
                <TableHead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Description</Th>
                        <Th></Th>
                    </Tr>
                </TableHead>
            {
                foulder.map(cat => (
                    <Tbody>
                        <Tr>
                            <td>{cat.name}</td>
                            <td>{cat.description}</td> 
                        </Tr>
                    </Tbody>
                ))
            }    
            </Table>
        </ Container>
    )
}
