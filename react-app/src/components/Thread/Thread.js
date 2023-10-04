import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import Replies from "./Replies";
import { formatDate, formatTime } from "../../service/DateTimeFormatter";
import "./Thread.css";
import { getAllThreads } from "../../service/ThreadAPI";


const Thread = () => {
  const sampleDate = "2023-10-02";
  const sampleTime = "14:30:00";
  const [open, setOpen] = useState(false);
  const [rowData, setRowData] = useState([]);


  useEffect(() => {
    getAllThreads()
    .then((data) => setRowData(data)) 
    .catch((error) => console.error("Error fetching data:", error));
  }, []);



  return (
    <div className="thread-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>General</Accordion.Header>
          <Accordion.Body>
            <Container fluid className="child">
              <Row className="rowHeader">
                <Col md={1} className="col1">
                  Author
                </Col>
                <Col md={2} className="col2">
                  Title
                </Col>
                <Col md={7} className="col2">
                  Thread
                </Col>

                <Col md={1} className="col4">
                  Replies
                </Col>
                <Col md={1} className="col4"></Col>
              </Row>
              {rowData.map((thread) => (
                <>
              <Row className="rowThread">
                <Col md={1}>{thread.author}</Col>
                <Col md={2}>{thread.title}</Col>
                <Col md={7}>{thread.content}</Col>
                <Col md={1}>1</Col>
                <Col md={1}>
                  <Button
                    onClick={() => setOpen(!open)}
                    aria-controls={thread._id}
                    aria-expanded={open}
                    className="btn-link no-hover"
                    key={thread._id}
                  >
                    View
                  </Button>
                </Col>
              </Row>
                       

              <Row>
                <Collapse in={open}>
                  <div id={thread._id}>
                    <Replies 
                      replies={thread.replies} 
                      key={thread._id}
                    />
                  </div>
                </Collapse>
              </Row></>
               ))}
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default Thread;
