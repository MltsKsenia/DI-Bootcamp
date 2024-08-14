import { useState } from 'react'
import './App.css'

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const handleVote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
  };
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Vote Your Language!</h1>
        {languages.map((language, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <span style={{ marginRight: '20px' }}>{language.votes}</span>
            <span style={{ marginRight: '20px' }}>{language.name}</span>
            <button onClick={() => handleVote(index)} style={{ color: 'green' }}>Click Here</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App;
