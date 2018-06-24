import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';
import { v1 } from 'uuid';
import { addToDO } from "../../actions";
import { formatDate } from '../../App'

import './TaskBar.css';

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
    }
  };

  render() {
    return (
      <Fragment>
        <div className="card">
          <div className="card-header">
            <h4 className="header task-bar-header">Add task</h4>
          </div>
          <div className="card-body">
            <form className="form-row task-bar" onSubmit={this.handleSubmit}>
              <div className="col">
                <input
                  className="form-control"
                  onChange={this.handleChangeTask}
                  name="task"
                  type="text"
                  placeholder="add your task"
                  required
                />
              </div>
              <div className="col">
                <select className="form-control" onChange={this.handleChangePriority} name="priority" id="priority">
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
                </select>
              </div>
              <div className="col">
                <select className="form-control" onChange={this.handleChangeCategory} name="category" id="category">
                  <option selected disabled>
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
                </select>
              </div>
              <div className="col">
                <DatePicker className="datepicker" onChange={this.handleChangeDate} value={this.state.date} />
              </div>
              <input className="btn btn-primary" type="submit" value="Add task" />
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  () => { },
  dispatch => ({ handleAddToDO: todo => dispatch(addToDO(todo)) })
)(TaskBar);