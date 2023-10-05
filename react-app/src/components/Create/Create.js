import React, { useState } from "react";
import "./Create.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { createNewThread } from "../../service/ThreadAPI";
import { useAuth } from "../../service/AuthContextProvider"; // Import useAuth hook

const Create = () => {
  const [title, setTitle] = useState(""); // State variable for thread title
  const [content, setContent] = useState(""); // State variable for thread content
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleCreateNewThread = () => {
    // Check if title and content are not empty before creating a new thread
    if (title.trim() === "" || content.trim() === "") {
      alert("Please enter both title and content for the thread.");
      return;
    }

    const newThreadData = {
      title: title,
      author: user.username,
      content: content,
    };
    console.log(user.username);
    console.log(newThreadData);

    createNewThread(newThreadData).then((newThread) => {
      // Handle the response from the API call if needed
      // For example, you can navigate to the directory after creating the thread
      navigate("/directory");
    });
  };

  return (
    <div className="create-container">
      <div className="create-text-container">
        <h1>New Thread</h1>
      </div>

      <div className="create-form">
        <Form>
          <Form.Group className="mt-4" controlId="formTitle">
            <Form.Control
              type="title"
              placeholder="Thread Title"
              style={{ marginLeft: "5vw", width: "70vw" }}
              value={title} // Bind the value of the input field to the state variable
              onChange={(e) => setTitle(e.target.value)} // Update the state variable on input change
            />
          </Form.Group>

          <Form.Group
            className="mt-4"
            controlId="exampleTextarea"
            style={{ marginLeft: "5vw", width: "70vw" }}
          >
            <Form.Control
              as="textarea"
              rows={10}
              placeholder="Thread Body"
              value={content} // Bind the value of the textarea to the state variable
              onChange={(e) => setContent(e.target.value)} // Update the state variable on input change
            />
          </Form.Group>

          <Button
            className="mt-3"
            variant="primary"
            type="button" // Change the type to "button" to prevent form submission
            onClick={handleCreateNewThread}
          >
            Submit
          </Button>

          <Button
            className="mt-3"
            variant="danger"
            type="button"
            style={{ marginLeft: "5vw" }}
            onClick={() => navigate("/directory")} // Use an arrow function to pass the function reference
          >
            Cancel
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Create;
