import React, { useRef, useState } from "react";

function CharacterCounter() {
    const inputRef = useRef(null);
    const [charCount, setCharCount] = useState(0);

    const handleInputChange = () => {
        const textLength = inputRef.current.value.length;
        setCharCount(textLength);
    };

    return (
        <div>
            <h1>Exercise 2</h1>
            <h2>CharacterCounter</h2>
            <textarea
                ref={inputRef}
                onChange={handleInputChange}
                placeholder="Start writing..."
                style={{ width: "100%", height: "100px" }}
            ></textarea>
            <p>Character Count: {charCount}</p>
        </div>
    );
}

export default CharacterCounter;
