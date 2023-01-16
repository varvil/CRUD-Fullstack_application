import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./user.css";

const User = () => {
  const [user, setUser] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profileId, setProfileId] = useState(0);

  const params = useParams();
  const navigate = useNavigate();

  //Fetch the current object with url ID from database
  useEffect(() => {
    fetch("http://localhost:8080/api/users/" + params.id)
      .then((response) => response.json())
      .then((user) => setUser(user));
  }, []);

  //Function to delete item
  const removeHandler = (e) => {
    e.preventDefault();

    setTimeout(function () {
      window.location.reload();
    });

    const path = "/";
    navigate(path);

    //Delete user by its id
    fetch("http://localhost:8080/api/users/" + params.id, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: params.id,
      }),
    });
  };

  //Function to modify user
  const modifyUser = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/users/" + params.id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        userId: params.id,
        name: name,
        email: email,
        phone: phone,
        profile: {
          profileId: profileId,
        },
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
              <th>UserId</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>ProfileId</th>
              <th>ProfileName</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {user.userId}</td>
              <td>
                {" "}
                <input type="text" placeholder={user.name}
                onChange={(e) => {
                  setName(e.target.value);
                }}></input>
              </td>
              <td>
                {" "}
                <input type="text" placeholder={user.email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}></input>
              </td>
              <td>
                {" "}
                <input type="text" placeholder={user.phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}></input>
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  placeholder={user?.profile?.profileId}
                  onChange={(e) => {
                    setProfileId(e.target.value);
                  }}
                ></input>
              </td>
              <td>{user?.profile?.profileName}</td>
            </tr>
          </tbody>
        </table>

        <div className="delete__modify">
          <button className="delete__button" onClick={removeHandler}>
            Delete
          </button>
          <button className="modify__button" onClick={modifyUser}>
            Modify
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
