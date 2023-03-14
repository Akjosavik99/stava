import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { SubmitButton, Triangle } from "../styles/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { sendPost } from "../utils/api";

const SuperWrapper = styled.div`
  padding: 20px;
  margin: auto;
  margin-top: 50px;
  max-width: 600px;
`;
const SubmitPostWrapper = styled.div`
  background-color: #f9dac3;
  margin: auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #f16a00;
  font-size: 4em;
  text-align: center;
  margin: 0;
`;

const SubmitPost: React.FC = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [picture, setPicture] = useState<string>("");

  const handleSubmitPost = () => {
    const post = { title: title, text: text, picture: picture };
    sendPost(post)
      .then((res) => window.location.reload())
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <Navbar />
        <SuperWrapper>
          <Title>Create Post</Title>
          <SubmitPostWrapper>
            <div className="mb-3">
              <label htmlFor="postTitle" className="form-label fs-3">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="postTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="postText" className="form-label fs-3">
                Text
              </label>
              <textarea
                className="form-control"
                id="postText"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="postImage" className="form-label fs-3">
                Attach image
              </label>
              <input
                className="form-control"
                type="file"
                id="postImage"
                onChange={(e) => setPicture(e.target.value)}
              />
            </div>
          </SubmitPostWrapper>
          <SubmitButton
            style={{ marginTop: "10px" }}
            type="submit"
            onClick={() => {
              handleSubmitPost();
            }}
          >
            Submit Post
          </SubmitButton>
        </SuperWrapper>
      </div>
    </>
  );
};

export default SubmitPost;
