import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';
import { v1 } from 'uuid';
import './TaskBar.css';
import { addToDO } from "../../actions";
import { formatDate } from '../../App'

class TaskBar extends Component {
  state = {
    task: '',
    priority: '',
    category: '',
    date: new Date(),
  };

  handleChangeTask = (event) => {
    this.setState({ task: event.target.value });
  };

  handleChangePriority = (event) => {
    this.setState({ priority: event.target.value });
  };

  handleChangeCategory = (event) => {
    this.setState({ category: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.addItem(...Object.values(this.state));
  };

  handleChangeDate = (date) => {
    this.setState({ date });
  };

  addItem = (text, priority, category, date) => {
    if (text && priority && category && date) {
      const newItem = {
        id: v1(),
        text,
        priority,
        category,
        date: formatDate(date),
      };


      this.props.handleAddToDO(newItem);
      // this.setState({ toDoList: [...this.state.toDoList, newItem] });
    }
  };

  render() {
    return (
      <Fragment>
        <form className="input-group task-bar" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChangeTask}
            name="task"
            type="text"
            placeholder="add your task"
            required
          />
          <select onChange={this.handleChangePriority} name="priority" id="priority">
            <option selected disabled>
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
            <option>
              -2
            </option>
          </select>
          <input
            onChange={this.handleChangeCategory}
            name="category"
            type="category"
            placeholder="add category"
            required
          />
          <DatePicker onChange={this.handleChangeDate} value={this.state.date} />
          <input className="btn btn-primary" type="submit" value="Add task" />
        </form>
      </Fragment>
    );
  }
}

export default connect(
  () => { },
  dispatch => ({ handleAddToDO: todo => dispatch(addToDO(todo)) })
)(TaskBar);