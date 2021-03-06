import './TaskBar.css';
import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import Button from '../Button/Button';
import {
  priorities,
  categories,
} from '../../constants';

function TaskBar(props) {
  const { handleSubmit } = props;

  return (
    <Form className="task-bar" inline onSubmit={handleSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="task" className="mr-sm-2">
          Task
        </Label>
        <Input type="text" name="task" id="task" placeholder="your task" required />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="priority" className="mr-sm-2">
          Priority
        </Label>
        <Input type="select" name="priority" id="priority">
          <option disabled>
            Choose priority
          </option>
          {priorities.map(priority => (
            <option key={priority}>
              {priority}
            </option>))}
        </Input>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="category" className="mr-sm-2">
          Category
        </Label>
        <Input type="select" name="category" id="category">
          <option disabled>
            Choose category
          </option>
          {categories.map(category => (
            <option key={category}>
              {category}
            </option>))}
        </Input>
      </FormGroup>
      <Button
        className="btn btn-primary"
        textContent2="Add your task"
      />
    </Form>
  );
}

TaskBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default TaskBar;
