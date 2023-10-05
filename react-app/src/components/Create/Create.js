import React from 'react'
import "./Create.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Create = () => {

  return (
    <div className="create-container">
      <div className="create-text-container">
        <h1>New Thread</h1>
      </div>
      
     <div className="create-form">
      <Form>
        <Form.Group className="mt-4" controlId="formTitle">
          <Form.Control type="title" placeholder="Thread Title" style={{marginLeft: '5vw', width:'70vw'}}/>
        </Form.Group>

        <Form.Group className="mt-4" controlId="exampleTextarea" style={{marginLeft: '5vw', width:'70vw'}}>
          <Form.Control as="textarea" rows={10} placeholder="Thread Body"/>
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

export default Create
