import './App.css';
import CardList from './components/CardsList';
import getBooks from './components/Library';

function App() {
  return (
    <div className="App">
      <CardList cards={getBooks()}/>
    </div>
  );
}
export default App;
