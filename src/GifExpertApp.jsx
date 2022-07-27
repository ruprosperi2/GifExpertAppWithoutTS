import React, {useState} from 'react';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    return (
        <>
            {/*titulo*/}
            <h1>GifExpertApp</h1>

            {/*Input*/}

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
