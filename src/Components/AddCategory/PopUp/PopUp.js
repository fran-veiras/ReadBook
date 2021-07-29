import React, {useState} from 'react';
import { Container, Request, Title, Name, Delete, Accept } from './PopUpStyle'

export const PopUp = ({newCategory, toggler, setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const [descriptionValue, setDescriptionValue] = useState('')

    const inputChange = (e) => {
            setInputValue(e.target.value)
    }

    const descriptionChange = (e) => {
        setDescriptionValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2 && descriptionValue.trim().length > 2) {
            setCategories(cats => [...cats, [inputValue, descriptionValue]]);
            toggler();
        }
    }

    // key

    return (
        <Container newCategory={newCategory}>
            <Request>
                <Title>Your book name:</Title>
                <form>
                <Name 
                    type="text" 
                    placeholder="complete here.."
                    value={inputValue}
                    onChange={inputChange}
                    />
                    <Title>Author:</Title>
                    <Name 
                    type="text" 
                    placeholder="complete here.."
                    value={descriptionValue}
                    onChange={descriptionChange}
                    />
                </form>
                <br></br>
                <Delete onClick={toggler} newCategory={newCategory}>Delete</Delete>
                <Accept onClick={handleSubmit} newCategory={newCategory}>Accept</Accept>
            </Request>
        </Container>
    )
}
