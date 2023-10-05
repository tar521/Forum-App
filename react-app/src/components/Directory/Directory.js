import React from 'react'
import Thread from "../Thread/Thread";
import ThreadHeader from "../Thread/ThreadHeader";
import Logout from "../Logout";
import Container from "react-bootstrap/esm/Container";
import "./Directory.css"
import {useAuth} from "../../service/AuthContextProvider";

const Directory = () => {
  const {isLoggedIn} = useAuth();

  function renderNotLoggedIn() {
    return (
      <div className="lander">
        <h1>Cannot Load Threads</h1>
        <p className="text-muted">A General Discussion Site</p>
        <br/>
        <br/>
        <p>Please Login to access the discussion!</p>
      </div>
    );
  }

  function renderDirectory() {
    return(
      <div className="directory-container">
      <Logout />
      <Container className="forum-container">
        <ThreadHeader />
        <Thread />
      </Container>
    </div>
    )
  }

  return (
    <>
      {isLoggedIn ? renderDirectory() : renderNotLoggedIn()}
    </>
  )
}

export default Directory
