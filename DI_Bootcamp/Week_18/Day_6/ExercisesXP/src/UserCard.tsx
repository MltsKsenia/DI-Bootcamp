import React from 'react';

interface UserCardProps {
    name?: string;
    age?: number;
}

const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '200px' }}>
            <h2>User Information</h2>
            <p>Name: {name || 'Unknown User'}</p>
            <p>Age: {age !== undefined ? age : 'Age not provided'}</p>
        </div>
    );
};

export default UserCard;