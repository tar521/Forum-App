import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import Replies from "./Replies";
import { formatDate, formatTime } from "../../service/DateTimeFormatter";
import "./Thread.css";

const Thread = () => {
  const sampleDate = "2023-10-02";
  const sampleTime = "14:30:00";
  const [open, setOpen] = useState(false);

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
                <Col md={1} className="col4"></Col>
              </Row>
              <Row className="rowThread">
                <Col md={1}>1</Col>
                <Col md={7}>Sample thread</Col>
                <Col md={2}>
                  {" "}
                  {formatDate(sampleDate)}
                  <br />
                  {formatTime(sampleTime)}
                </Col>
                <Col md={1}>1</Col>
                <Col md={1}>
                  <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="replies-collapse-text"
                    aria-expanded={open}
                    className="btn-link no-hover"
                  >
                    View
                  </Button>
                </Col>
              </Row>
              <Row>
                <Collapse in={open}>
                  <div id="replies-collapse-text">
                    <Replies />
                  </div>
                </Collapse>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default Thread;
