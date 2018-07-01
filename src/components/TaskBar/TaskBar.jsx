import './TaskBar.css';

import React from 'react';

import { Form, FormGroup, Label, Input } from 'reactstrap';

export default (props) => {
  const { handleSubmit } = props;

  return (
    <Form className="task-bar" inline onSubmit={handleSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="task" className="mr-sm-2">Task</Label>
        <Input type="text" name="task" id="task" placeholder="your task" required />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="priority" className="mr-sm-2">Priority</Label>
        <Input type="select" name="priority" id="priority">
          <option disabled>
            Choose priority
            </option>
          <option>
            +2
            </option>
          <option>
            +1
            </option>
          <option>
            0
            </option>
          <option>
            -1
            </option>
        </Input>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="category" className="mr-sm-2">Category</Label>
        <Input type="select" name="category" id="category">
          <option disabled>
            Choose category
            </option>
          <option>
            Do now
            </option>
          <option>
            Do tomorrow
            </option>
          <option>
            Do soon
            </option>
          <option>
            Do when you get some extra time
            </option>
        </Input>
      </FormGroup>
      <button className="btn btn-primary">Add your task</button>
    </Form>
  );
}