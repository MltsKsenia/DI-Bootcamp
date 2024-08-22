import React, { Component } from 'react';
import data from './data.json';

class Example3 extends Component {
    render() {
        return (
            <div>
                <h2>Experiences</h2>
                {data.Experiences.map((experience, index) => (
                    <div key={index}>
                        <h3>{experience.companyName}</h3>
                        <img src={experience.logo} alt={experience.companyName} style={{ width: '100px' }} />
                        <p>
                            <a href={experience.url} target="_blank" rel="noopener noreferrer">
                                {experience.companyName}
                            </a>
                        </p>
                        {experience.roles.map((role, i) => (
                            <div key={i}>
                                <h4>{role.title}</h4>
                                <p>{role.description}</p>
                                <p>{role.startDate} - {role.endDate}</p>
                                <p>{role.location}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default Example3;