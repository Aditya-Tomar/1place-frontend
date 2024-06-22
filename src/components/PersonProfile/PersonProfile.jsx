import './styles.css';

export default function PersonProfile(props) {
    return (
        <>
            <div className="d-flex-center pp-container">
                <img alt="" className="profile-image" src="./logo192.png"/>
                <div className="user-name"> { props.name } Aditya S. Tomar </div>
                <div className="user-bio"> { props.bio }footballer, gwalior, snooker </div>
            </div>
        </>
    );
}