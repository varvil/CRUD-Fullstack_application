import React from "react";
import "./addprofile.css";
import { useState} from "react";
import { useNavigate } from "react-router";

const AddProfile = () => {
  const [profileName, setProfileName] = useState("");
  const navigate = useNavigate();

  const AddNewProfileFunction = () => {
    fetch("http://localhost:8080/api/profiles", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        profileName: profileName,
      }),
    });
    
  setTimeout(function () {
    window.location.reload();
  });

  const path = "/";
  navigate(path);

  };

  return (
    <div className="addprofile__wrapper">
      <div className="addprofile__content">
        <h3>Add new profile</h3>
        {/* Div for name */}
        <div className="addprofile__input__section">
          <input
            placeholder="Profile name"
            required={true}
            type="text"
            onChange={(e) => {
              setProfileName(e.target.value);
            }}
          />
          <br></br>
          <button className="add__button" onClick={AddNewProfileFunction}>
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProfile;
