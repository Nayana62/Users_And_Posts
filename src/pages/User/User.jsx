import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../axios";
import "./User.css";
import Spinner from "../../components/Spinner";
import TimeConverter from "../../components/TimeConverter";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState("");

  const getUserData = async () => {
    try {
      const res = await axios.get(`/users/${id}`);
      setUser(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(
    () => {
      getUserData();
    }, // eslint-disable-next-line
    [id]
  );

  if (isError !== "") {
    return <h2>{isError}</h2>;
  }

  if (!user) {
    return <Spinner />;
  }

  const { name, avatar, email, about, createdAt } = user;

  return (
    <>
      <div className="user">
        <h1>User Information</h1>
        <div>
          <div className="info">
            <img src={avatar} alt={`${name}'s Avatar`} />
            <div>
              <p> {name}</p>
              <p>{email}</p>
            </div>
          </div>
          <div className="details">
            <span>Created At:</span>
            <TimeConverter timestamp={createdAt} />
          </div>
          <div className="details">
            <span>About:</span>
            <p>{about}</p>
          </div>
          <Link to={"/users"} className="button">
            <button className="btn">Back</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default User;
