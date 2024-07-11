import logo from './logo.svg';
import './styles/App.css';
import Home from './components/Home.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <Routes>
          <Route exact path="/" element={< Home />}
          />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
