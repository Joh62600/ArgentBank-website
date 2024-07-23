import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserNameAPI } from "../../redux/reducer/profileSlice";
import "./EditName.css"; // Import du fichier CSS

function EditName() {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user);
  const [editMode, setEditMode] = useState(false);
  const [newUserName, setNewUserName] = useState(userProfile.userName);

  // UseEffect to update newUserName whenever editMode is set to true
  useEffect(() => {
    if (editMode) {
      setNewUserName(userProfile.userName);
    }
  }, [editMode, userProfile.userName]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    dispatch(updateUserNameAPI(newUserName));
    setEditMode(false);
  };

  const handleCancelClick = () => {
    setNewUserName(userProfile.userName);
    setEditMode(false);
  };

  return (
    <div className="edit-name">
      <h1>Welcome back {userProfile.userName}!</h1>
      {editMode ? (
        <>
          <div className="field-container">
            <label htmlFor="firstName">First name:</label>
            <input
              type="text"
              id="firstName"
              value={userProfile.firstName}
              disabled
              autoComplete="given-name"
            />
          </div>
          <div className="field-container">
            <label htmlFor="lastName">Last name:</label>
            <input
              type="text"
              id="lastName"
              value={userProfile.lastName}
              disabled
              autoComplete="family-name"
            />
          </div>
          <div className="field-container">
            <label htmlFor="username">User name:</label>
            <input
              type="text"
              id="username"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="button-group">
            <button onClick={handleSaveClick} className="save-button">Save</button>
            <button onClick={handleCancelClick} className="cancel-button">Cancel</button>
          </div>
        </>
      ) : (
        <button onClick={handleEditClick} className="edit-button">Edit Name</button>
      )}
    </div>
  );
}

export default EditName;
