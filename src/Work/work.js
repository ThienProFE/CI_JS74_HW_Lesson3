import React from 'react';
import './work.css';

const MyWork = (props) => {
    return (
        <ul className="list" >
            <li className="list_content">{props.name}</li>
        </ul>
    );
};
export default MyWork;
