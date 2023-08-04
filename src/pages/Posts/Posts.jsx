import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Header from "../../components/Header/Header";
import Spinner from "../../components/Spinner";
import "./Posts.css";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const getPostsData = async () => {
    try {
      const res = await axios.get("/posts");
      setPosts(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <>
      <Header />
      {isError !== "" && <h2>{isError}</h2>}
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="posts">
            <div>
              <div className="sub-heading">
                <p>Click on posts below to read more</p>
                <div className="button">
                  <button
                    type="submit"
                    className="btn"
                    onClick={() => setShowModal(true)}
                  >
                    Add new Post
                  </button>
                </div>
              </div>
              {posts.map((post) => {
                const { id, title } = post;
                return (
                  <div key={id} className="post_title">
                    <Link to={`/posts/${id}`}>
                      <p>{title}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          {showModal && <Modal onClose={() => setShowModal(false)} />}
        </>
      )}
    </>
  );
};

export default Posts;
