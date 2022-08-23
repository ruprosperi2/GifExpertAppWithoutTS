import React, {useState} from 'react';
import {AddCategory} from "./components/AddCategory";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        setCategories(cat => ['Pokemon', ...cat])
    }

    return (
        <>
            {/*titulo*/}
            <h1>GifExpertApp</h1>

            {/*Input*/}
            <AddCategory setCategories={setCategories}/>

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
