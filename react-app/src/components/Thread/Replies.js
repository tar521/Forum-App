import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { formatDate, formatTime } from "../../service/DateTimeFormatter";


const Replies = () => {
    const sampleDate = "2023-10-02";
    const sampleTime = "14:30:00";
  
    return (  
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
                          Thread Content
                        </Col>
                        <Col md={2} className="col2">
                          Author
                        </Col>

                        <Col md={2}>
                          {" "}
                          {formatDate(sampleDate)}
                          <br />
                          {formatTime(sampleTime)}
                        </Col>
                      </Row>
                    </Container>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
        </div>
    );
};
export default Replies;

