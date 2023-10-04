import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { formatDate, formatTime } from "../../service/DateTimeFormatter";
import { getAllThreads } from "../../service/ThreadAPI";

const Replies = (props) => {
  console.log(props.replies);
  const replies = props.replies;



  return (
    <div className="thread-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Replies</Accordion.Header>
          <Accordion.Body>
            <Container fluid className="child">
              {replies.map((reply) => (
                <Row
                  key={reply._id}
                >
                  <Col md={1}>{reply.author}</Col>
                  <Col md={7}>{reply.content}</Col>
                </Row>
              ))}
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default Replies;

