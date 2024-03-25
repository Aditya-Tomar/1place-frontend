import React, { useState } from 'react';
import Button from './button';

const UserProfile = ({ profilePicture, username, bio, onSave }) => {
    const [editableUsername, setEditableUsername] = useState(username);
    const [editableBio, setEditableBio] = useState(bio);
    const [isFocused, setIsFocused] = useState(false);
    const [saveButton, showSaveButton] = useState(false);

    const handleFocus = () => {
        showSaveButton(true);
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    const handleUsernameChange = (e) => {
        setEditableUsername(e.target.value);
    };

    const handleBioChange = (e) => {
        setEditableBio(e.target.value);
    };

    const updateDetails = () => {
        showSaveButton(false);
        onSave(editableUsername, editableBio);
    }

    return (
        <div className="user-profile" style={{ display: 'flex', alignItems: 'start' }}>
            <div className="profile-picture">
                <img src={profilePicture} alt="Profile" style={{ borderRadius: '50%', width: '60px', height: '60px' }} />
            </div>
            <div style={{ display: 'flex', alignContent: 'flex-end' }}>
                <div className="profile-details" style={{ textAlign: 'left', marginLeft: '16px' }}>
                    <div className="bio-input" style={{ marginBottom: '10px' }}>
                        <input
                            type="text"
                            value={editableUsername}
                            onChange={handleUsernameChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="Enter username" >
                        </input>
                    </div>
                    <div className='bio-input'>
                        <textarea
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '2px solid #ccc',
                                borderRadius: '5px',
                                fontSize: '16px',
                                resize: 'vertical', // Disable resizing
                                maxHeight: 'calc(4 * 1.5em)', // Set max height for 4 rows (adjust as needed)
                                transition: 'border-color 0.3s ease',
                            }}
                            type="text"
                            className={isFocused ? "focused" : ""}
                            value={editableBio}
                            onChange={handleBioChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            rows="6"
                            maxLength={400}
                            placeholder="About you...">
                        </textarea>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        {saveButton && <Button
                            text={"Save"}
                            backgroundColor={"#fff"}
                            textColor={"#000"}
                            onClick={updateDetails}
                        ></Button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
