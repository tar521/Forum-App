import React from 'react'
import Thread from "../Thread/Thread";
import ThreadHeader from "../Thread/ThreadHeader";
import Logout from "../Logout";
import Container from "react-bootstrap/esm/Container";
import "./Directory.css"

const Directory = () => {
  return (
    <div className="directory-container">
      <Logout />
      <Container className="forum-container">
        <ThreadHeader />
        <Thread />
      </Container>
    </div>
  )
}

export default Directory
