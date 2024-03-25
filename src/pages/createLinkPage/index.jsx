
import DraggableBox from '../../components/DraggableBox/DraggableBox';
import LinkItem from '../../components/LinkItem/LinkItem';
import Button from '../../components/button';
import './styles.css';
// [
//     { id:'k-1', itemValue: "firstText", itemLink: 'https://www.google.comomm'},
//     { id:'k-2', itemValue: "secondtText", itemLink: 'https://www.google.comm'}
//   ]
function CreateLinkPage() {
    return <div className="create-page-link-main-wrapper">
        <div className="create-page-link-left-wrapper">
        <div>
            <div>
                <img></img>
                <div>Name</div>
                <input value="hahah"></input>
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