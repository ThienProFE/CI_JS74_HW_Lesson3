import React from 'react';
import '../App';

const MyCount = (props) => {
    return (
        <div className="count">
            {props.count}
        </div>
    )
}
export default MyCount;