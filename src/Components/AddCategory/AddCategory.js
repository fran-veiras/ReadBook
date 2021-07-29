import React, {useState} from 'react';
import { Icon, Container } from './AddCategoriesStyles';
import { TableFoulders } from './CreateFolder/CreateFolder';
import { PopUp } from './PopUp/PopUp';
import { SaveTime } from './SaveTime/SaveTime';

export const AddCategory = ({time, toggleSave, save}) => {

    const [categories, setCategories] = useState([]);

    const [newCategory, setCategory] = useState(false);

    const [cycle, setCycle] = useState([])

    const toggler = () => {
        if (newCategory === false || newCategory === true) {
            setCategory(!newCategory)
        }
    }

    return (
        <>
            <Container>
                <Icon onClick={toggler} newCategory={newCategory}/>
                <TableFoulders cycle={cycle} time={time} categories={categories}/>
            </Container>
            <PopUp toggler={toggler} setCategories={setCategories} newCategory={newCategory} key={categories}/>
            <SaveTime setCycle={setCycle} categories={categories} time={time} toggleSave={toggleSave} save={save}/>
        </>
    )
}
