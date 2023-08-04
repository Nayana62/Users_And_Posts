import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Users.css";
import Spinner from "../../components/Spinner";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getUsersData = async () => {
    try {
      const res = await axios.get("/users");
      setUsers(res.data);
      console.log("res.data", res.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <>
      <Header />
      {isError !== "" && <h2>{isError}</h2>}

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="users">
            <div>
              {users.map((user) => {
                const { id, name, avatar } = user;
                return (
                  <div key={id} className="card">
                    <img src={avatar} alt="" />
                    <Link to={`/users/${id}`}>
                      <p>{name}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Users;
