import logo from './logo.svg';
import './App.css';
import './icomoon/style.css'

import Button from './components/button';

const handleButtonClick = () => {
  // Handle button click event
  console.log('Button clicked');
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button
        backgroundColor="#ebf5ff" // Custom background color
        borderColor="#eeeeee" // Custom border color
        textColor="#000000" // Custom text color
        onClick={handleButtonClick} // Pass the event handler function
        icon={""}
        text={"New Link"}
      >
      </Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;