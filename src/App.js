import logo from './logo.svg';
import './App.css';
import './icomoon/style.css'
import DraggableBox from './components/DraggableBox/DraggableBox';
import LinkItem from './components/LinkItem/LinkItem';
import LinkItemList from './components/LinkItemList/LinkItemList';
import CreateLinkPage from './pages/createLinkPage/index';
import Button from './components/button';

const handleButtonClick = () => {
  // Handle button click event
  console.log('Button clicked');
};


function App() {
  return (
    <div className="App">
      <CreateLinkPage>

      </CreateLinkPage>
      {/* <LinkItemList > */}
       
      {/* </LinkItemList> */}
    
      {/* <Button
        backgroundColor="#ebf5ff" // Custom background color
        borderColor="#eeeeee" // Custom border color
        textColor="#000000" // Custom text color
        onClick={handleButtonClick} // Pass the event handler function
        icon={""}
        text={"New Link"}
      >
      </Button> */}
    </div>
  );
}

export default App;