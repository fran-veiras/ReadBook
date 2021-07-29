import React, {useState, useEffect} from 'react'
import { Container, Request, Title, Name, Delete, Accept, Select, Option } from './SaveStyle'

export const SaveTime = ({toggleSave, save, categories, setCycle, time}) => {

    // export form value

    const handleSubmit = (e) => {
        if (categorieCycle.length > 2) {
            setCycle(val => [...val, inputValue, categorieCycle, time])
            
            setInputValue('')
            toggleSave()
        }
    }

    const [inputValue, setInputValue] = useState(['']);

    // get description

    const inputChange = (e) => {
        setInputValue(e.target.value)
    };

    
    // get categorie value

    const [categorieCycle, setCategorieCycle] = useState([''])
    
    const Options = categories.map(cat => { return { name: cat[0] } })
    
    const handleChange = (e) => {
        setCategorieCycle(e.target.value)
    };

    return (
        <Container save={save}>
                <Request>
                    <Title>Description</Title>
                    <form onSubmit={handleSubmit}>
                        <Name 
                        type="text" 
                        placeholder="complete here.."
                        value={inputValue}
                        onChange={inputChange}
                        />
                        <Title>Choose a book folder</Title>
                        <Select value={categorieCycle} onChange={handleChange}>
                            <option hidden selected>Choose your folder</option>
                            {
                                Options.map((value) => (
                                        <Option 
                                        key={value.name} 
                                        value={value.name}
                                        >
                                            {value.name}
                                        </Option>
                                ))
                            }
                        </Select>
                    </form>
                    <br />
                    <br />
                    <Delete onClick={toggleSave} save={save}>Delete</Delete>
                    <Accept onClick={handleSubmit} save={save}>Accept</Accept>
                </Request>
        </Container>
    )
}
