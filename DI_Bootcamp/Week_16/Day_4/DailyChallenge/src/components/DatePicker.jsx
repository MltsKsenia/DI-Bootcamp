import React, { useState } from 'react';

const DatePicker = ({ onDateChange }) => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleChange = (e) => {
        setSelectedDate(e.target.value);
        onDateChange(e.target.value);
    };

    return (
        <input
            type="date"
            value={selectedDate}
            onChange={handleChange}
        />
    );
};

export default DatePicker;