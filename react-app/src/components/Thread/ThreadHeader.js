import React from "react";
import "./Thread.css";
import Container from "react-bootstrap/esm/Container";

const ThreadHeader = () => {

  return (
    <div>
    <Container fluid className="banner-container">
        <p className="banner-title">Discussion Forum </p>
        <p className="banner-user">FirstName LastName</p>
    </Container>
            <div className="topics">Topics</div>
            </div>
  );
};
export default ThreadHeader;
