
import './styles.css';
import DraggableBox from '../../components/DraggableBox/DraggableBox';
import LinkItem from '../../components/LinkItem/LinkItem';
import Button from '../../components/button';
import UserProfile from '../../components/UserProfile';
// [
//     { id:'k-1', itemValue: "firstText", itemLink: 'https://www.google.comomm'},
//     { id:'k-2', itemValue: "secondtText", itemLink: 'https://www.google.comm'}
//   ]

function CreateLinkPage() {

const onSaveDetails = (name, bio) => {
    console.log('Button clicked', name, bio);
  }
  
  
    return <div className="create-page-link-main-wrapper">
        <div className="create-page-link-left-wrapper">
        <div>
            <div>
            <UserProfile
                profilePicture="https://res.cloudinary.com/stealthman22/image/upload/v1586308023/new-portfolio/hero/two-cargo-ships-sailing-near-city-2144905.jpg" // Replace with URL or path to profile picture
                username="JohnDoe" // Replace with username
                bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit." // Replace with bio
                onSave={onSaveDetails}
            />
            </div>
        </div>
        <div className="newlink-layer-wrapper">
            <div></div>
            <Button
                backgroundColor="#ebf5ff" // Custom background color
                borderColor="#eeeeee" // Custom border color
                textColor="#000000" // Custom text color
                 // Pass the event handler function
                icon={""}
                text={"New Link"}
            >
            </Button>
        </div>
        <div className="drapdrop-box">
            <DraggableBox data={[
                    { id:'k-1', itemValue: "firstText", itemLink: 'https://www.google.comomm'},
                    { id:'k-2', itemValue: "secondtText", itemLink: 'https://www.google.comm'},
                    { id:'k-3', itemValue: "firstText", itemLink: 'https://www.google.comomm'},
                    { id:'k-4', itemValue: "secondtText", itemLink: 'https://www.google.comm'}
                ]}
            >
                <LinkItem></LinkItem>
            </DraggableBox>
        </div>
        </div>
        <div className="create-page-link-right-wrapper">
            <div>view Page</div>
        </div>
    </div>
}

export default CreateLinkPage