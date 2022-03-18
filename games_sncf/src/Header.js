import React from 'react';

const header = (props) => {
    return (
        <div>
           <h1>Welcome to {props.name}</h1> 
        </div>
    );
};

export default header;