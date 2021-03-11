import './App.css';
import Navigation from './comp/Nav.js';
import WelcomeMessage from './comp/WelcomeMess.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      
      </header>
      <main>
        <WelcomeMessage />
      </main>
    </div>
  );
}

export default App;
