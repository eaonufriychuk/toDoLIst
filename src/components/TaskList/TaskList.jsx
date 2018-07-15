import './TaskList.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import Button from '../Button/Button';
import { tableTitles } from '../../constants';

function TaskList(props) {
  const {
    todoList,
    onRemove,
    search,
  } = props;

  let result;
  if (!todoList.length && search) {
    result = (
      <div>
        Your search returned no results
      </div>);
  } else if (!todoList.length) {
    result = (
      <div>
        You have no tasks
      </div>);
  } else {
    result = (
      <Table borderless className="table">
        <thead>
          <tr className="text-center">
            {tableTitles.map(title => (
              <th key={title} scope="col">
                {title}
              </th>))}
          </tr>
        </thead>
        <tbody>
          {todoList
            .map(task => (
              <tr
                className="text-center"
                key={task._id}
              >
                <td>
                  {task.text}
                </td>
                <td>
                  {task.priority}
                </td>
                <td>
                  {task.category}
                </td>
                <td>
                  {task.date}
                </td>
                <td>
                  <Button
                    handleClick={onRemove(task._id)}
                    className="btn btn-light"
                    textContent2="Delete"
                  />
                </td>
              </tr>))}
        </tbody>
      </Table>);
  }

  return (
    <div className="table-responsive">
      {result}
    </div>);
}

TaskList.propTypes = {
  todoList: PropTypes.instanceOf(Array).isRequired,
  onRemove: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default TaskList;
