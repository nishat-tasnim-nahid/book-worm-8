import React from 'react';

const AddBookName = (props) => {
    return (
        <div>
            <ul>
                <li>{props.book.name}</li>
            </ul>
        </div>
    );
};

export default AddBookName;