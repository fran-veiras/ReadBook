import React from 'react';
import {Tr,
        Td,
        Tbody,
        Count,
        TrFolder,
        Arrow
} from './FolderStyle';
import { useState } from 'react';

export const Folders = ({ categorie, catDescription, info }) => {

    const [open, setOpen] = useState(false)

    const openFolder = () => {
        if (open === false) {
            setOpen(!false)
        }else {
            setOpen(!true)
        }
    }

    return (
        <>
        {
            <Tbody key={categorie}>
                        <Tr onClick={openFolder}>
                            <Td>{categorie}</Td>
                            <Td>{catDescription}</Td>
                        </Tr>
                        {
                            info.filter(cy => cy.folder === categorie).map(cy => 
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
        }
        </>
    )
}
