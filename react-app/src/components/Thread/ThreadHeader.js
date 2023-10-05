import React from "react";
import "./Thread.css";
import Container from "react-bootstrap/esm/Container";
import { useAuth } from "../../service/AuthContextProvider"; // Import useAuth hook


const ThreadHeader = () => {
  const {  user } = useAuth();
console.log(user);

  return (
    <div>
    <Container fluid className="banner-container">
        <p className="banner-title">Discussion Forum </p>
        <p className="banner-user">{user.username}</p>
    </Container>
            <div className="topics">Topics</div>
            </div>
  );
};
export default ThreadHeader;
