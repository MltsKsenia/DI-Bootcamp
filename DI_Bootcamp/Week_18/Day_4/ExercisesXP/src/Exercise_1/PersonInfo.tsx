import React from 'react';
import { PersonWithAddress } from './types';

type PersonInfoProps = {
    person: PersonWithAddress;
};

const PersonInfo: React.FC<PersonInfoProps> = ({ person }) => {
    return (
        <div>
            <h2>{person.name}</h2>
            <p>Age: {person.age}</p>
            <p>Street: {person.street}</p>
            <p>City: {person.city}</p>
        </div>
    );
};

export default PersonInfo;
