import React from 'react';

const Person = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
            <h5 className="card-title">{`Name: ${props.person.name}`}</h5>
        </div>
    </div>
);

export default Person;