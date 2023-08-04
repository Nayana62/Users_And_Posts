import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../axios";
import Spinner from "../../components/Spinner";
import "./Post.css";
import TimeConverter from "../../components/TimeConverter";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isError, setIsError] = useState("");

  const getPostData = async () => {
    try {
      const res = await axios.get(`/posts/${id}`);
      setPost(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(
    () => {
      getPostData();
    }, // eslint-disable-next-line
    [id]
  );

  if (!post) {
    return <Spinner />;
  }

  const { cover, createdAt, description, title } = post;

  return (
    <>
      {isError === "" && <h2>{isError}</h2>}
      <div className="post">
        <h1>Post Information</h1>
        <div className="post_card">
          <h4>{title}</h4>
          <img src={cover} alt="" />
          <div className="text">
            <span>Created at: </span>
            <TimeConverter timestamp={createdAt} />
          </div>
          <div className="text">
            <span>Description: </span>
            <p> {description}</p>
          </div>
          <Link to={"/posts"} className="button">
            <button className="btn">Back</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Post;
