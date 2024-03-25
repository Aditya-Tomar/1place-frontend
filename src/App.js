import logo from './logo.svg';
import './App.css';
import './icomoon/style.css'

import Button from './components/button';
import UserProfile from './components/UserProfile';
import UserrBProfile from './components/UserBProfile';

const handleButtonClick = () => {
  // Handle button click event
  console.log('Button clicked');
};

const onSaveDetails = (name, bio) => {
  console.log('Button clicked', name, bio);
}


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
          icon={"icon-shopping-bag"}
        >
        </Button>
          <UserProfile
            profilePicture="https://res.cloudinary.com/stealthman22/image/upload/v1586308023/new-portfolio/hero/two-cargo-ships-sailing-near-city-2144905.jpg" // Replace with URL or path to profile picture
            username="JohnDoe" // Replace with username
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit." // Replace with bio
            onSave={onSaveDetails}
          />
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