
import './App.css';

// components
import Header from './components/Header/Header';
import TodosList from './components/Todos/TodosList';

function App() {
  return (
    <div className="App">
      <Header />
      <TodosList />
    </div>
  );
}

export default App;
