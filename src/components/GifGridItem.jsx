import React from 'react';

export const GifGridItem = (image) => {

    const {title, url} = image.item


    return (
        <div className="card">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    );
};
