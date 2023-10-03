import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";


const Logout = () => {
    const navigate = useNavigate(); 

  return (
    <Container fluid className="d-flex justify-content-end logout">
      <Button className="btn btn-danger mx-2" onClick={() => navigate("/")}>
        <div className="logout-icon">Logout</div>
      </Button>
    </Container>
  );
};
export default Logout;
