import React, {useState} from 'react';
import { Icon, Container } from './AddCategoriesStyles';
import { TableFoulders } from './CreateFoulder/CreateFoulder';
import { PopUp } from './PopUp/PopUp';

export const AddCategory = () => {

    const [categories, setCategories] = useState([]);

    const [newCategory, setCategory] = useState(false);

    const toggler = () => {
        if (newCategory === false || newCategory === true) {
            setCategory(!newCategory)
        }
    }

    return (
        <>
            <Container>
                <Icon onClick={toggler} newCategory={newCategory}/>
                <TableFoulders categories={categories}/>
            </Container>
            <PopUp toggler={toggler} setCategories={setCategories} newCategory={newCategory} key={categories}/>
        </>
    )
}
