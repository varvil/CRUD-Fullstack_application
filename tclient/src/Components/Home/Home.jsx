import React from "react";
import { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/users")
      .then((response) => response.json())
      .then((user) => setUser(user));
  }, []); //hakasulkeet lopussa meinaa että haetaan vain kerran. Jos siellä on muuttuja sisällä, tehdään useEffect uudestaan.

  useEffect(() => {
    fetch("http://localhost:8080/api/profiles")
      .then((response) => response.json())
      .then((profile) => setProfile(profile));
  }, []);

  return (
    <div className="home__container">
      <h2 className="container__title">All users</h2>

      <div className="users__content">
        {user.map((users) => {
          return (
            <span className="user" key={users.userId}>
              <h3>{users.name}</h3>
              <h4>{users.profile.profileName}</h4>

              <div className="user__info">
                <i class="uil uil-envelope-alt"></i>
                <p>{users.email}</p>

                <i class="uil uil-phone-alt"></i>
                <p>{users.phone}</p>
              </div>

              <Link className="profile__button" to={`/user/${users.userId}`}>
                See more
              </Link>
            </span>
          );
        })}
      </div>

        <div className="profiles__container">
          <h2 className="container__title">
            All profiles
          </h2>

          <div className="profile__content">
          {profile.map((profile) => {
          return (
            <span className="profile" key={profile.profileId}>
              <h3>{profile.profileName}</h3>
              <h4>{profile.profileId}</h4>

              <Link className="profile__button2" to={`/profile/${profile.profileId}`}>
                See more
              </Link>
            </span>
          );
        })}
          </div>
        </div>

    </div>
  );
};

export default Home;
