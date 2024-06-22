import PersonProfile from '../PersonProfile/PersonProfile';
import './styles.css';
import { useState, useEffect } from "react";

export default function ProfileView() {

    const [ userData, setUserData ] = useState([]);
    const [ linksData, setLinksData ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/users/6676bfab0b8e729fbfdce779', { method: 'GET' })
        .then((res) => res.json())
        .then((data) => {
            setUserData(data);
        }).catch(err => console.log('err', err));
    }, []);

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/links/6676bfab0b8e729fbfdce779')
        .then((res) => res.json())
        .then((data) => {
            setLinksData(data.data);
            console.log('res', data.data);
        });
    }, []);

    return (
        <>
            <div className='d-flex-center profile-container'>
                <div className="d-flex-center profile-wrapper">
                    <PersonProfile
                        name={userData.name}
                        bio={userData.bio}
                    />  
                    <div className="d-flex-center">
                    { linksData && linksData.map(
                        data => (
                            <a className="user-link" key={ data._id } href={ data.url }> { data.title } </a>
                        ))
                    }
                     </div>
                    <div className="d-flex-center">
                        <div> link 1 </div>
                        <div> link 2 </div>
                        <div> link 3 </div>
                    </div>
                </div>
            </div>
        </>
    );
}