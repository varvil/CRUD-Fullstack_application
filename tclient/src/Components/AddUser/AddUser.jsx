import React from "react";
import "./adduser.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [profileId, setProfileId] = useState(1);
  const [profileName, setProfileName] = useState("");
  const [profile, setProfile] = useState([]);

  const navigate = useNavigate();

  //Fetch profiles from endpoint
  useEffect(() => {
    fetch("http://localhost:8080/api/profiles")
      .then((response) => response.json())
      .then((profile) => setProfile(profile));
  }, []);

  //Function to add item. If fields are empty, sends error message and filled, sends success message
  const addUser = (e) => {
    e.preventDefault();

    setTimeout(function () {
      window.location.reload();
    });

    const path = "/";
    navigate(path);

    //Posts user's input data to backend url
    fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        profile: {
          profileId: profileId,
          profileName: profileName,
        },
      }),
    });
  };

  return (
    <div className="add__wrapper">

      {/* Div for name */}

      <div className="input__section">
      <h3>Add new user</h3>
        <i class="uil uil-user"></i>
        <input
          placeholder="Name"
          required={true}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br></br>
        <i class="uil uil-envelope-alt"></i>
        <input
          placeholder="Email"
          required={true}
          className="email__text"
          type="textbox"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br></br>
        <i class="uil uil-phone-alt"></i>
        <input
          placeholder="Phone"
          min={0}
          required
          className="input__number"
          type="text"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <br></br>

        <select
          onChange={(e) => {
            setProfileId(e.target.value);
          }}
        >
          {profile.map((profile) => {
            return (
              <option key={profile.profileId} value={profile.profileId}>
                {profile.profileName}
              </option>
            );
          })}
        </select>
        <br></br>
        {/* The function addUser is executed when button is clicked */}
        <button className="add__button" onClick={addUser}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddUser;
