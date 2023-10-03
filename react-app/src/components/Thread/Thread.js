import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { formatDate, formatTime } from "../../service/DateTimeFormatter";
import "./Thread.css";

const Thread = () => {
  const [posts, setPosts] = useState([]);
  const sampleDate = "2023-10-02";
  const sampleTime = "14:30:00";

  return (
    <div className="thread-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>General</Accordion.Header>
          <Accordion.Body>
            <Container fluid className="child">
              <Row className="rowHeader">
                <Col md={1} className="col1">
                  #
                </Col>
                <Col md={7} className="col2">
                  Thread
                </Col>
                <Col md={2} className="col3">
                  Last Post
                </Col>
                <Col md={1} className="col4">
                  Replies
                </Col>
              </Row>
              <Row>
                <Col md={1}>1</Col>
                <Col md={7}>Sample thread</Col>
                <Col md={2}>
                  {" "}
                  {formatDate(sampleDate)}
                  <br />
                  {formatTime(sampleTime)}
                </Col>
                <Col md={1}>1</Col>
              </Row>
            </Container>
            <div className="thread-container">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Replies</Accordion.Header>
                  <Accordion.Body>
                    <Container fluid className="child">
                      <Row>
                        <Col md={1} className="col1">
                          #
                        </Col>
                        <Col md={7} className="col2">
                          Thread
                        </Col>
                        <Col md={2} className="col3">
                          Last Post
                        </Col>
                        <Col md={1} className="col4">
                          Replies
                        </Col>
                      </Row>
                      <Row>
                        <Col md={1}>1</Col>
                        <Col md={7}>Thread Content</Col>
                        <Col md={2}>
                          {" "}
                          {formatDate(sampleDate)}
                          <br />
                          {formatTime(sampleTime)}
                        </Col>
                        <Col md={1}>0</Col>
                      </Row>
                    </Container>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default Thread;
