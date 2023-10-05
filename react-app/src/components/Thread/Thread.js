import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import Replies from "./Replies";
import { formatDate, formatTime } from "../../service/DateTimeFormatter";
import "./Thread.css";
import { getAllThreads, createNewThread } from "../../service/ThreadAPI";
import { useAuth } from "../../service/AuthContextProvider"; // Import useAuth hook



const Thread = () => {
  const sampleDate = "2023-10-02";
  const sampleTime = "14:30:00";
  const {  user } = useAuth();

  const [openThreads, setOpenThreads] = useState({});
  const [rowData, setRowData] = useState([]);
  //console.log(rowData);

  useEffect(() => {
    getAllThreads()
      .then((data) => setRowData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleThread = (threadId) => {
    setOpenThreads((prevOpenThreads) => ({
      ...prevOpenThreads,
      [threadId]: !prevOpenThreads[threadId],
    }));
  };

  const handleCreateNewThread = () => {
    const newThreadData = {
      title: "TEST THREAD # 4",
      author: user.username,
      content: "Man, it really is a lovely day",
    };
    createNewThread(newThreadData).then((newThread) => {
      setRowData((prevData) => [...prevData, newThread]);
    });
  };

  return (
    <div className="thread-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>General</Accordion.Header>
          <Accordion.Body>
            <Container fluid className="child">
              <Row className="new-thread">
                <Button onClick={handleCreateNewThread} className="btn-link no-hover ">
                  New Thread
                </Button>
              </Row>
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
                  <Row className="rowThread" id={`collapse${thread._id}`}>
                    <Col md={1}>{thread.author}</Col>
                    <Col md={2}>{thread.title}</Col>
                    <Col md={7}>{thread.content}</Col>
                    <Col md={1}>{thread.replies.length}</Col>
                    <Col md={1}>
                      <Button
                        onClick={() => toggleThread(thread._id)}
                        aria-controls={`collapse${thread._id}`}
                        aria-expanded={openThreads[thread._id]}
                        className="btn-link no-hover"
                      >
                        {openThreads[thread._id] ? "Hide" : "View"}
                      </Button>
                    </Col>
                  </Row>

                  <Row>
                    <Collapse
                      in={openThreads[thread._id]}
                      id={`collapse${thread._id}`}
                    >
                      <div id={`replies-collapse-text-${thread._id}`}>
                        <Replies replies={thread.replies} key={thread._id} />
                      </div>
                    </Collapse>
                  </Row>
                </>
              ))}
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default Thread;
