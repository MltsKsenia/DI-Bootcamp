import Greeting from './Greeting';
import Counter from './Counter';
import UserCard from './UserCard';
import DataFetcher from './DataFetcher';
import './App.css'

function App() {
  return (
    <div>
      <Greeting name="John Doe" />
      <Counter />
      <UserCard name="Alice" age={30} />
      <UserCard name="Bob" />
      <UserCard />
      <h1>Data Fetcher Example</h1>
      <DataFetcher />
    </div>
  );
}

export default App;