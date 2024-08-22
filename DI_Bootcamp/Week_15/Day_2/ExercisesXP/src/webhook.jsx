import React from 'react';

function Webhook() {
    const postData = async () => {
        const url = 'https://webhook.site/ddb7ef69-27d9-4400-bb3a-6f7e7db2efae';

        const data = {
            key1: 'myusername',
            email: 'mymail@gmail.com',
            name: 'Isaac',
            lastname: 'Doe',
            age: 27
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log('Response:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="App">
            <button onClick={postData}>Post Data</button>
        </div>
    );
}

export default Webhook;
