import React, {useState} from 'react';
import {AddCategory} from "./components/AddCategory";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        setCategories(cat => [newCategory, ...cat])
    }

    return (
        <>
            {/*titulo*/}
            <h1>GifExpertApp</h1>

            {/*Input*/}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />

            {/*Listado de Git*/}
            <ol>
                {
                    categories.map((category) => <li key={category}>{category}</li>)
                }
            </ol>
        </>
    );
};

export default GifExpertApp;
