import React, { useState } from "react";
import axios from "../../axios";
import "./Modal.css";

const Modal = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title: title,
      description: description,
    };

    try {
      const response = await axios.post("/posts", newPost);

      console.log("New post created:", response.data);

      setTitle("");
      setDescription("");
      onClose(); 
    } catch (error) {
      console.error("Error creating new post:", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div>
          <h2>Create New Post</h2>
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <button type="submit" className="btn modal-btn">
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
