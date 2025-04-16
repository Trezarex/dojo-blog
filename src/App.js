import logo from './logo.jpg';
import './App.css';

function App() {
  const name = 'My Baabuu & Me';
  return (
    <div className="App">
      <div className="content">
        <h1>
          {name}
          <br />
          <span role="img" aria-label="heart">❤️</span>
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
