import { Filter } from './components/Filter';
import './App.css';

function App() {
  const wordArray = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];
  return (
    <div className="App">
       <Filter arrayToFilter={wordArray} />
    </div>
  );
}

export default App;
