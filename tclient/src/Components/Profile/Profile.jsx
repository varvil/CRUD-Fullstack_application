import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [profileName, setProfileName] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/profiles/" + params.id)
      .then((response) => response.json())
      .then((profile) => setProfile(profile));
  }, []);

  //Function to delete item
  const removeProfileFunction = (e) => {
    e.preventDefault();

    setTimeout(function () {
      window.location.reload();
    });

    const path = "/";
    navigate(path);

    //Delete user by its id
    fetch("http://localhost:8080/api/profiles/" + params.id, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: params.id,
      }),
    });
  };

  //Function to modify user
  const modifyProfile = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/profiles/" + params.id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        profileId: params.id,
        profileName: profileName,
      }),
    });
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="user__container">
      <div className="user__table">
        <table>
          <thead>
            <tr>
              <th>ProfileId</th>
              <th>ProfileName</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{profile.profileId}</td>
              <td>
                {" "}
                <input
                  type="text"
                  placeholder={profile.profileName}
                  onChange={(e) => {
                    setProfileName(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="delete__modify">
          <button className="delete__button" onClick={removeProfileFunction}>
            Delete
          </button>
          <button className="modify__button" onClick={modifyProfile}>
            Modify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
