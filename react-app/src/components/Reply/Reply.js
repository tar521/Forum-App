import React from 'react'
import "./Reply.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Reply = () => {

  return (
    <div className="reply-container">
      <div className="reply-text-container">
        <h1>Reply</h1>
      </div>
      
     <div className="reply-form">
      <Form>

        <Form.Group className="mt-4" controlId="exampleTextarea" style={{marginLeft: '5vw', width:'70vw'}}>
          <Form.Control as="textarea" rows={12} placeholder="Reply Body"/>
        </Form.Group>

        <Button className="mt-3" variant="primary" type="submit">
          Submit
        </Button>

        <Button className="mt-3" variant="danger" type="button" style={{marginLeft: '5vw'}} href='/directory'>
          Cancel
        </Button>
      </Form>
     </div>
      
    </div>
  )
}

export default Reply
