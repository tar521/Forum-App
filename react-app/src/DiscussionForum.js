import React from "react";
import Thread from "./components/Thread/Thread";
import ThreadHeader from "./components/Thread/ThreadHeader";
import Logout from "./components/Logout";
import Container from "react-bootstrap/esm/Container";
import "./App.css";

const DiscussionForum = () => {
  return (
    <div className="app-container ">
      <Logout />
      <Container className="forum-container">
        <ThreadHeader />
        <Thread />
      </Container>
    </div>
  );
};
export default DiscussionForum;
