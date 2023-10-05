import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { formatDate, formatTime } from "../../service/DateTimeFormatter";
import { getAllThreads } from "../../service/ThreadAPI";
import { useNavigate } from "react-router-dom";

const Replies = (props) => {
  const navigate = useNavigate();
  const { replies, thread } = props;

  const handleCreateNewReply = () => {
    if (thread && thread._id) {
      navigate("/reply", {
        state: { selectedThreadId: thread._id },
      });
    }
  };

  return (
    <div className="thread-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Replies</Accordion.Header>
          <Accordion.Body>
            <Container fluid className="child">
              {replies.map((reply) => (
                <Row key={reply._id}>
                  <Col md={1}>{reply.author}</Col>
                  <Col md={7}>{reply.content}</Col>
                </Row>
              ))}
              <Row className="new-thread">
                <Button
                  className="btn-link no-hover nowrap-button"
                  onClick={handleCreateNewReply}
                >
                  New Reply
                </Button>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default Replies;
